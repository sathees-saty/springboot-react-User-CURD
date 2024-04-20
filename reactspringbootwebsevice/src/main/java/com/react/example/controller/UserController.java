package com.react.example.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import com.react.example.model.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

	@GetMapping("/users")
	public List<User> getAllUsers() {
		User user = new User();
		user.setId(1);
		user.setName("sathees");
		user.setCity("Chennai");
		user.setEmail("sathees@gmail.com");
		User user1 = new User();
		user1.setId(2);
		user1.setName("kumar");
		user1.setCity("New Delhi");
		user1.setEmail("kumar@gmail.com");
		List<User> users = new ArrayList<User>();
		users.add(user);
		users.add(user1);

		return users;
	}

	@PostMapping("/users")
	    public void insertData(@RequestBody User user) {
	        System.out.println(user.toString());
	    }
	@DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") long id) {
        System.out.println("Deleted User ID "+id);
    }
	
	@PutMapping("/users/{id}")
	public void updateUser(@PathVariable("id") long id, @RequestBody User user) {
		System.out.println("Update user ID: "+id);
		System.out.println("Update user Details: "+user.toString());
	}
}
