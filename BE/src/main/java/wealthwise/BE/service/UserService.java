package wealthwise.BE.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import wealthwise.BE.domain.dto.UserDto;
import wealthwise.BE.domain.dto.UserJoinRequest;
import wealthwise.BE.domain.dto.UserLoginRequest;
import wealthwise.BE.domain.entity.User;
import wealthwise.BE.repository.UserRepository;
import wealthwise.BE.util.JwtUtil;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    @Transactional
    public String join(UserJoinRequest req) {
        User user = User.builder()
                .loginId(req.getLoginId())
                .password(encoder.encode(req.getPassword()))
                .nickname(req.getNickname())
                .build();
        userRepository.save(user);

        return jwtUtil.generateToken(user);
    }

    public String login(UserLoginRequest req) {
        User user = userRepository.findByLoginId(req.getLoginId())
                .orElse(null);

        if (user != null && encoder.matches(req.getPassword(), user.getPassword())) {
            return jwtUtil.generateToken(user);
        } else {
            return null;
        }
    }

    public UserDto getUserInfo(String loginId) {
        User user = userRepository.findByLoginId(loginId).orElse(null);
        if (user != null) {
            return UserDto.builder()
                    .loginId(user.getLoginId())
                    .nickname(user.getNickname())
                    .build();
        }
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByLoginId(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with loginId: " + username));
        return new org.springframework.security.core.userdetails.User(user.getLoginId(), user.getPassword(), new ArrayList<>());
    }
}
