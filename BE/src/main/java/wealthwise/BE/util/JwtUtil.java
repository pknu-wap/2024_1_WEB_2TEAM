package wealthwise.BE.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import wealthwise.BE.domain.entity.User;

import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET_KEY = "your_secret_key"; // 실제 비밀 키로 변경해야 합니다

    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getLoginId())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10시간 유효
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}
