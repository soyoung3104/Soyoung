<%@ page import="file.FileDTO" %>
<%@ page import="file.FileDAO" %>
<%@ page import="java.util.ArrayList" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/custom.css">
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>JSP 파일 업로드</title>
</head>
<body>
   <nav class="navbar navbar-default">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
              aria-expended="false">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="main.jsp">JSP 게시판 웹사이트</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
              <li class="active"><a href="main.jsp">메인</a></li>
              <li><a href="bbs.jsp">게시판</a></li>
              <li><a href="file.jsp">파일 업로드</a></li>
          </ul>
    </div>
    </nav>
    <%
		ArrayList<FileDTO> fileList = new FileDAO().getList();
    
    	for(FileDTO file: fileList) {
    		out.write("<a href=\"" + request.getContextPath() + "/downloadAction?file=" +
    			java.net.URLEncoder.encode(file.getFileRealName(), "UTF-8") + "\">" +
    				file.getFileName() + "(다운로드 횟수: " + file.getDownloadCount()+ ")</a><br>");
    	}
    %>
</body>
</html>