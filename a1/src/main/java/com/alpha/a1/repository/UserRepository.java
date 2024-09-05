package com.alpha.a1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.alpha.a1.model.UserModel;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByEmailAndName(String email, String name);
}
