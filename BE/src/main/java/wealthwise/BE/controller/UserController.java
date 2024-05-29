package wealthwise.BE.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import wealthwise.BE.domain.dto.UserJoinRequest;
import wealthwise.BE.domain.dto.UserLoginRequest;
import wealthwise.BE.service.BoardService;
import wealthwise.BE.service.UserService;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final BoardService boardService;


    //회원가입 요청

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody UserJoinRequest req, BindingResult bindingResult) {

        if (userService.joinValid(req, bindingResult).hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }

        userService.join(req);
        return ResponseEntity.ok("회원가입에 성공했습니다. 로그인 후 사용 가능합니다!");
    }

    //로그인 요청

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest req) {
        boolean success = userService.login(req);
        if (success) {
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }
}