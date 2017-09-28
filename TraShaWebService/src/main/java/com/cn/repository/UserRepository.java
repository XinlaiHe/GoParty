package com.cn.repository;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.cn.domain.UserDomain;

@Repository
public class UserRepository extends AbstractRepository<UserDomain> {
	private Logger logInfo = LoggerFactory.getLogger(UserRepository.class); 
	
	@Override
	@Transactional
	public List<UserDomain> getList() {
		Session session = this.getSession();
		Criteria criteria = session.createCriteria(UserDomain.class);
		List<UserDomain> users = criteria.list();
		
		return users;
	}

	public UserDomain register(UserDomain domain) {
		Session session = this.getSession();
		try {
			session.saveOrUpdate(domain);
			return domain;
		} catch (Exception e) {
			logInfo.error(e.toString());
		} finally {
			session.close();
		}
		
		return null;
	}
	
	public UserDomain login(UserDomain domain) {
		Session session = this.getSession();
		Criteria criteria = session.createCriteria(UserDomain.class)
				.add(Restrictions.eq("username", domain.getUsername()))
				.add(Restrictions.eq("password", domain.getPassword()));
		try {
			UserDomain user = (UserDomain) criteria.uniqueResult();
			
			if (user == null) throw new Exception("Username or Password Mismatch");
			else return user; 
		} catch (Exception e) {
			logInfo.error(e.toString());
		} finally {
			session.close();
		}
		
		return null;
	}

	@Override
	public void add(UserDomain domain) {
		// TODO Auto-generated method stub
		
	}

}
