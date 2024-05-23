package wealthwise.BE.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.UserService;

@Controller
@RequiredArgsConstructor
@RequestMapping("/users")

// 사용자 계정 관리와 관련된 여러 기능을 제공하는 컨트롤러
// 회원 가입, 로그인, 사용자 정보 수정, 계정 삭제, 관리자 페이지 접근 등을 처리
public class UserController {

    private final UserService userService;
    private final BoardService boardService;

    // 회원가입 페이지 반환, GET 요청 - /users/join
    @GetMapping("/join")
    public String joinPage(Model model) {
        model.addAttribute("userJoinRequest", new UserJoinRequest());
        return "users/join";
    }

    // 회원가입 처리, POST 요청 - /users/join
    @PostMapping("/join")
    public String join(@Valid @ModelAttribute UserJoinRequest req, BindingResult bindingResult, Model model) {

        // Validation
        if (userService.joinValid(req, bindingResult).hasErrors()) {
            return "users/join";
        }

        userService.join(req);
        model.addAttribute("message", "회원가입에 성공했습니다!\n로그인 후 사용 가능합니다!");
        model.addAttribute("nextUrl", "/users/login");
        return "printMessage";
    }

    // 로그인 페이지 반환, GET 요청 - /users/login
    @GetMapping("/login")
    public String loginPage(Model model, HttpServletRequest request) {

        // 로그인 성공 시 이전 페이지로 redirect 되게 하기 위해 세션에 저장
        String uri = request.getHeader("Referer");
        if (uri != null && !uri.contains("/login") && !uri.contains("/join")) {
            request.getSession().setAttribute("prevPage", uri);
        }

        model.addAttribute("userLoginRequest", new UserLoginRequest());
        return "users/login";
    }

    // 마이페이지
    // GET - /users/mypage
    @GetMapping("/myPage")
    public String myPage(Authentication auth, Model model) {
        model.addAttribute("boards", boardService.findMyBoard(auth.getName()));
        model.addAttribute("user", userService.myInfo(auth.getName()));
        return "users/myPage";
    }


    // 사용자 정보 수정 페이지를 반환
    // GET - /users/edit
    @GetMapping("/edit")
    public String userEditPage(Authentication auth, Model model) {
        User user = userService.myInfo(auth.getName());
        model.addAttribute("userDto", UserDto.of(user));
        return "users/edit";
    }
    // 사용자 정보 수정 요청, 유효성 검사를 수행하고, 실패하면 수정 페이지로 다시 이동
    // POST - /users/edit
    @PostMapping("/edit")
    public String userEdit(@Valid @ModelAttribute UserDto dto, BindingResult bindingResult,
                           Authentication auth, Model model) {

        // Validation
        if (userService.editValid(dto, bindingResult, auth.getName()).hasErrors()) {
            return "users/edit";
        }

        userService.edit(dto, auth.getName());

        model.addAttribute("message", "정보가 수정되었습니다.");
        model.addAttribute("nextUrl", "/users/myPage/board");
        return "printMessage";
    }
    //계정 삭제 페이지 (GET 요청)
    @GetMapping("/delete")
    public String userDeletePage(Authentication auth, Model model) {
        User user = userService.myInfo(auth.getName());
        model.addAttribute("userDto", UserDto.of(user));
        return "users/delete";
    }
    // 계정 삭제 처리, POST 요청 - /users/delete
    // 비밀번호 맞으면 계정 삭제
    @PostMapping("/delete")
    public String userDelete(@ModelAttribute UserDto dto, Authentication auth, Model model) {
        Boolean deleteSuccess = userService.delete(auth.getName(), dto.getNowPassword());
        if (deleteSuccess) {
            model.addAttribute("message", "탈퇴 되었습니다.");
            model.addAttribute("nextUrl", "/users/logout");
            return "printMessage";
        } else {
            model.addAttribute("message", "현재 비밀번호가 틀려 탈퇴에 실패하였습니다.");
            model.addAttribute("nextUrl", "/users/delete");
            return "printMessage";
        }
    }
}