package com.alpha.a1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.alpha.a1.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {
}
