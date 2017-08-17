package com.cn.repository;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cn.domain.PartyDomain;

@Repository
public class PartyRepository extends AbstractRepository<PartyDomain> {
	
	@Override
	@Transactional
	public List<PartyDomain> getList() {
		Session session = this.getSession();
		Criteria criteria = session.createCriteria(PartyDomain.class);

		return criteria.list();
	}

	@Override
	@Transactional
	public void add(PartyDomain domain) {
		Session session = this.getSession();
		session.persist(domain);
	}

}
