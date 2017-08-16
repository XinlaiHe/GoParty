package com.cn.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.cn")
public class GoPartyWebServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoPartyWebServiceApplication.class, args);
	}
}
