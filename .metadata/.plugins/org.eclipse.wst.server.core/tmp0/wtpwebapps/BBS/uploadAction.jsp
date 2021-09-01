<%@page import="java.util.Enumeration"%>
<%@ page import="file.FileDAO" %>
<%@ page import="java.io.File" %>
<%@ page import="java.util.Enumeration" %>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy" %>
<%@ page import="com.oreilly.servlet.MultipartRequest" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>JSP 파일 업로드</title>
</head>
<body>
	<%
		String directory = "C:/web_workspace/BBS/upload/";
		int maxSize = 1024 * 1024 * 100; // 최대 100mb까지만 저장
		String encoding = "UTF-8";
		
		MultipartRequest multipartRequest
		= new MultipartRequest(request, directory, maxSize, encoding,
				new DefaultFileRenamePolicy());
		
		Enumeration fileNames = multipartRequest.getFileNames();
		while(fileNames.hasMoreElements()) {
			String parameter = (String) fileNames.nextElement();
			String fileName = multipartRequest.getOriginalFileName(parameter);
			String fileRealName = multipartRequest.getFilesystemName(parameter);
			
			if(fileName == null) {
				continue;
			}
			
			// 시큐어 코딩
			if(!fileName.endsWith(".doc") && !fileName.endsWith(".hwp") &&
					!fileName.endsWith(".pdf") && !fileName.endsWith(".xls")) {
				File file = new File(directory + fileRealName);
				file.delete();
				out.write("업로드할 수 없는 확장자 입니다.<br>");
			} else {
				new FileDAO().upload(fileName, fileRealName);
				out.write("파일명: " + fileName + "<br>");
				out.write("실제 파일명: " + fileRealName + "<br>");	
			}	
		}
	%>
</body>
</html>