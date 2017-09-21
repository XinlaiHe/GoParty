package com.cn.repository;

import java.util.Base64;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cn.domain.SharingDomain;

@Repository
public class SharingRepository extends AbstractRepository<SharingDomain> {
	
	@Override
	@Transactional
	public List<SharingDomain> getList() {
		Session session = this.getSession();
		Criteria criteria = session.createCriteria(SharingDomain.class);
		List<SharingDomain> parties = criteria.list();
		
		for(SharingDomain party : parties) {
			party.setImage(Base64.getDecoder().decode(party.getImage()));
		}
		
		return parties;
	}

	@Override
	@Transactional
	public void add(SharingDomain domain) {
		Session session = this.getSession();
		session.persist(domain);
	}

}
