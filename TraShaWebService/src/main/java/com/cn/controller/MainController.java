package com.cn.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cn.domain.SharingDomain;
import com.cn.repository.SharingRepository;

@RestController
public class MainController {
	private Logger logInfo = LoggerFactory.getLogger(MainController.class); 
	
	@Autowired
	private SharingRepository sharingRepository;
	
	@CrossOrigin
	@RequestMapping(value="/sharings", method=RequestMethod.GET)
	public List<SharingDomain> getFlowers() {
		logInfo.info("Getting All Sharings");
		return sharingRepository.getList();
	}
	
	@CrossOrigin
	@RequestMapping(value="/sharings", method=RequestMethod.POST)
	public void addFlower(@Valid SharingDomain party) {
		logInfo.info("Adding New Sharing " + party.toString());
		sharingRepository.add(party);
	}
}
