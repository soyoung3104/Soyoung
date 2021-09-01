package com.sample;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 *  Container(컨테이너)
 *  - 컨테이너는 웹서버와 서블릿 사이의 통신을 지원함
 *  - 컨테이너는 서블릿의 생명 주기를 관리함
 *  - 컨테이너는 새로운 요청이 들어올 때마다 자바 스레드를 생성하여 사용자의 요청을 처리함
 *  - 컨테이너는 선언적인 방법으로 보안 관련 내용을 설정할 수 있음
 *  
 *  Servlet(서블릿)
 *  - 웹서버에서 실행되는 자바 프로그램임
 *  - 사용자의 요구에 따라서 동적으로 웹 컨텐츠를 생산해서 클라이언트 측에 전송하는 자바기술
 *  - javax.servlet.http.HttpServlet 클래스를 상속 받아서 사용자 정의, 프로그램 작성
 * 
 *  요청방식
 *  1. get 방식
 *    - 서버에 있는 정보를 가져오기 위해 만들어짐
 *    - 240 바이트까지 전달 가능
 *    - 쿼리스트링 환경변수를 통해 전달함
 *    - 쿼리스트링 형식:
 *      http://xxx.xxx.co.kr/servlet/login?id=hong&name=gildong
 *    - URL 노출로 보안성이 요구되는 경우에는 사용할 수 없음
 *    - 검색 엔진에서 검색어 전송에 많이 이용함
 *  
 *  2. post 방식
 *    - 서버로 정보(데이터)를 업로드하기 위해 만들어짐
 *    - 데이터 크기의 제한이 없음
 *    - URL에 파라미터가 표시되지 않음
 *    
 *  서블릿의 실행과정
 *  - 사용자가 URL을 클릭해서 컨테이너에 새로운 요청을 함
 *  - 컨테이너는 요청을 접수한 다음, HttpServletRequedst, HttpServletResponse 객체를 생성함
 *  - 접수한 URL을 분석해서 해당 서블릿 객체를 생성하고, 사용자의 요청을 처리하기 위해 스레드 생성
 *  - 서블릿의 service() 메소드를 호출하고, 요청 방식에 따라서 어떤 메소드를 호출할지 결정함
 *  - 서블릿 doGet() 메소드를 호출해서 사용자의 요청을 처리하고, 응답을 작성함
 *  
 *  서블릿의 장점
 *  - 스레드를 기반으로 하므로 웹 어플리케이션 운영에 효율적이다.
 *  - 자바를 기반으로 하므로 자바 API를 모두 사용할 수 있다.
 *  - 운영체제나 하드웨어에 영향을 받지 않는다.
 *  - 한번에 개발된 어플리케이션은 다양한 서버 환경에서도 실행 가능하다.
 *  - 웹 어플리케이션에서 효율적인 자료 공유 방법을 제공한다.
 *  
 *  웹 어플리케이션 개발 시 서블릿 이점
 *  - 컨텐츠와 비즈니스 로직을 분리할 수 있다.
 *  - 컨트롤러와 뷰의 역할 분담
 *  - 웹디자이너와 개발자 간의 원활한 공동작업이 가능하다.
 *  - 유지보수가 수월하다.
 *  - 기능의 확장이 용이하다.
 *  - 프로그래머가 HTML, 자바스크립트, 스타일시트 등 복잡한 기술을 모두 알아야할 필요가 없다.
 *  
 *  배포 서술자(Deploy Description : web.xml)
 *  - 배포 서술자는 서블릿과 jsp를 어떻게 실행하느냐에 관한 정보가 들어있음
 *  - 배포 서술자에서는 서블릿과 URL을 매핑시키는 작업을 수행함
 *  - 배포 서술자는 URL 매핑 외에 보안역할 설정, 오류 페이지 설정, 초기화 구성 등의 내용을 설정할 수 있다.
 *  
 */

//@WebServlet("/MyFirstServlet")
public class MyFirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		
		Date date = new Date();
		
		out.println("<html>");
		out.println("<body>");
		out.println("My First Servlet Program !");
		out.println("<br>");
		out.println(date.toString());
		out.println("</body>");
		out.println("</html>");
	
	}

}
