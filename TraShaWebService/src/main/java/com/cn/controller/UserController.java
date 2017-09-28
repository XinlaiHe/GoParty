package com.cn.controller;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cn.domain.UserDomain;
import com.cn.repository.UserRepository;

@RestController
public class UserController {
	private Logger logInfo = LoggerFactory.getLogger(UserController.class); 
	
	@Autowired
	private UserRepository userRepository;
	
	@CrossOrigin
	@RequestMapping(value="/user/login", method=RequestMethod.POST)
	@ResponseBody
	public UserDomain login(@RequestBody UserDomain user) {
		try {
			user.setPassword(encoderByMd5(user.getPassword()));	
			logInfo.info("Login User: " + user.getUsername());
			
			return userRepository.login(user);
		} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
			logInfo.error("Error occur during encryption");
		}
		
		return null;
	}
	
	@CrossOrigin
	@RequestMapping(value="/user/register", method=RequestMethod.POST)
	@ResponseBody
	public UserDomain register(@RequestBody UserDomain user) {
		try {
			user.setPassword(encoderByMd5(user.getPassword()));	
			logInfo.info("Register User: " + user.getUsername());
			
			return userRepository.register(user);
		} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
			logInfo.error("Error occur during encryption");
		}
		
		return null;
	}
	
	public String encoderByMd5(String str) throws NoSuchAlgorithmException, UnsupportedEncodingException{
        MessageDigest md5 = MessageDigest.getInstance("MD5");
        String password = Base64.getEncoder().encodeToString(md5.digest(str.getBytes("utf-8")));
        
        return password;
    }
}
