package com.cn.controller;

import java.util.List;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cn.domain.PartyDomain;
import com.cn.repository.PartyRepository;

@RestController
public class MainController {
	private Logger logInfo = LoggerFactory.getLogger(MainController.class); 
	
	@Autowired
	private PartyRepository partyRepository;
	
	@RequestMapping(value="/parties", method=RequestMethod.GET)
	public List<PartyDomain> getFlowers() {
		logInfo.info("Getting All Parties");
		return partyRepository.getList();
	}
	
	@RequestMapping(value="/parties", method=RequestMethod.POST)
	public void addFlower(@Valid PartyDomain party) {
		logInfo.info("Adding New Party " + party.toString());
		partyRepository.add(party);
	}
}
