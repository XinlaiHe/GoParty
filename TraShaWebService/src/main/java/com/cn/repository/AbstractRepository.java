package com.cn.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class AbstractRepository<T> {

	@Autowired
	protected SessionFactory sessionFactory;
	
	protected Session getSession() {
		return sessionFactory.openSession();
	}
	
	public abstract List<T> getList();
	
	public abstract void add(T domain);
}
