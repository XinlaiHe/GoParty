package com.cn.repository;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.cn.domain.PartyDomain;

@Repository
public class PartyRepository extends AbstractRepository<PartyDomain> {
	private Logger logInfo = LoggerFactory.getLogger(PartyDomain.class); 
	
	@Override
	public List<PartyDomain> getList() {
		Session session = this.getSession();
		Criteria criteria = session.createCriteria(PartyDomain.class);
		
		logInfo.info("Getting Party List.");
		
		List<PartyDomain> parties = criteria.list();
		
		session.close();
		
		return parties;
	}

	@Override
	public void add(PartyDomain domain) {
		Session session = this.getSession();
		Transaction transaction = session.beginTransaction();
		try {
			session.persist(domain);
			transaction.commit();
			logInfo.info("Inserting New Party Successfully.");
		} catch(Exception e) {
			logInfo.error("Error Occur During Inserting New Party, Begin to Rollback.");
			transaction.rollback();
		} finally {
			session.close();
		}
		
	}

}
