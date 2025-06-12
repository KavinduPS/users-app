package com.kavi.usersapp.repository;

import com.kavi.usersapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {
}
