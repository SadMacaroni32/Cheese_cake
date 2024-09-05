package com.alpha.a1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alpha.a1.model.UserModel;
import com.alpha.a1.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Transactional
    public UserModel createUser(UserModel user) {
        // Business logic before saving user
        return userRepository.save(user);
    }

    @Transactional
    public UserModel updateUser(Long id, UserModel userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setName(userDetails.getName());
            user.setEmail(userDetails.getEmail());
            return userRepository.save(user);
        }).orElse(null);
    }

    @Transactional
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<UserModel> loginUser(String email, String name) {
        return userRepository.findByEmailAndName(email, name);
    }
}