package wealthwise.BE.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import wealthwise.BE.domain.dto.UserDto;
import wealthwise.BE.domain.dto.UserJoinRequest;
import wealthwise.BE.domain.dto.UserLoginRequest;
import wealthwise.BE.service.UserService;

import java.util.Map;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 회원가입 요청을 처리하는 메서드
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody UserJoinRequest req, BindingResult bindingResult) {
        // 유효성 검사에서 오류가 있는 경우
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }

        // 추가적인 유효성 검사
        userService.validateJoinRequest(req, bindingResult);
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }

        // 회원가입 처리 후 JWT 토큰 생성
        String token = userService.join(req);
        return ResponseEntity.ok(Map.of("token", token)); // 생성된 JWT 토큰을 반환
    }

    // 로그인 요청을 처리하는 메서드
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest req) {
        String token = userService.login(req); // 로그인 처리 후 JWT 토큰 생성
        if (token != null) {
            return ResponseEntity.ok(Map.of("token", token)); // 로그인 성공 시 JWT 토큰 반환
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패"); // 로그인 실패 시 401 응답
        }
    }

    // 로그아웃 요청을 처리하는 메서드
    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false); // 기존 세션이 있는지 확인
        if (session != null) {
            session.invalidate(); // 세션 무효화
            System.out.println("Session invalidated successfully."); // 로그 추가
        } else {
            System.out.println("No session found."); // 로그 추가
        }
        return ResponseEntity.ok("로그아웃 성공"); // 로그아웃 성공 메시지 반환
    }


    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(Authentication auth) {
        if (auth == null || auth.getName() == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }

        UserDto userDto = userService.getUserInfo(auth.getName());
        if (userDto != null) {
            return ResponseEntity.ok(userDto);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("사용자 정보를 찾을 수 없습니다.");
        }
    }
}
