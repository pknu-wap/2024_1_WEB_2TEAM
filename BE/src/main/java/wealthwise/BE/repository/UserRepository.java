package wealthwise.BE.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wealthwise.BE.domain.entity.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // 로그인 ID로 사용자 찾기
    Optional<User> findByLoginId(String loginId);

    // 닉네임에 특정 문자열을 포함하는 사용자를 페이징 처리하여 찾기
    Page<User> findAllByNicknameContains(String nickname, PageRequest pageRequest);

    // 특정 로그인 ID를 가진 사용자가 존재하는지 확인
    Boolean existsByLoginId(String loginId);

    //  특정 닉네임을 가진 사용자가 존재하는지 확인
    Boolean existsByNickname(String nickname);

}