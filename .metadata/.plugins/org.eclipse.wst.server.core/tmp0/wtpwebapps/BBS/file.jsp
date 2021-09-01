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
	<form action="uploadAction.jsp" method="post" enctype="multipart/form-data">
		파일:<input type="file" name="file1"><br>
		파일:<input type="file" name="file2"><br>
		파일:<input type="file" name="file3"><br>
		<input type="submit" value="파일 업로드">
	</form>
	<br>
	<a href="fileDownload.jsp">파일 다운로드 페이지</a>
</body>
</html>