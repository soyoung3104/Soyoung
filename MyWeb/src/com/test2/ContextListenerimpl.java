package com.test2;

import javax.servlet.*;

public class ContextListenerimpl implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent sce) { // 컨테이너가 종료될 때
		System.out.println("웹 어플리케이션 제거");
		
	}

	@Override
	public void contextInitialized(ServletContextEvent sce) { // 컨테이너 시작할 때
		System.out.println("웹 어플리케이션 초기화");

	}

}
