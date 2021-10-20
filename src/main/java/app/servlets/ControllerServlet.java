package app.servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        if (request.getParameter("xVal")!= null && request.getParameter("yVal")!= null &&
            request.getParameter("rVal")!= null)
            getServletContext().getRequestDispatcher("/check").forward(request, response);
        else
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
