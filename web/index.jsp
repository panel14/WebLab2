<%--
  Created by IntelliJ IDEA.
  User: verzz
  Date: 13.10.2021
  Time: 1:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
  <head>
    <title>Lab2</title>
    <link href="${pageContext.request.contextPath}/css/styles.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script defer src="${pageContext.request.contextPath}/js/index.js"></script>
  </head>
  <body onload="init()">
    <header>
      Верзаков Александр Юрьевич, P3232, вариант 32125
    </header>
    <br/>
    <div class="toning">
      <div id="form">
        <form id="toSend" method="post">
          <fieldset>
            <legend>Введите данные</legend>
            <label for="xVal">X:</label>
            <input type="text" maxlength="5" id="xVal" value="0" name="xVal"><br/>
            <label for="yVal">Y:</label>
            <input type="text" maxlength="5" id="yVal" value="0" name="yVal"><br/>
            <label for="rVal">R:</label>
            <select id="rVal">
              <%
                out.println("<option value=\"0\">---</option>");
                for (float x = 1; x <= 3; x += 0.5)
                  out.println("<option value=\""+ x + "\">"+ x + "</option>");
              %>
            </select><br/>
            <input type="button" value="Send" onclick="validateForm(form)">
          </fieldset>
        </form>
      </div>
      <div id="table">
        <table>
          <caption>Результаты</caption>
          <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Runtime</th>
            <th>Current Time</th>
            <th>Hit</th>
          </tr>
        </table>
      </div>
      <div id="graph">
        <canvas id="paint" width="400px" height="400px"></canvas>
      </div>
    </div>
  </body>
</html>
