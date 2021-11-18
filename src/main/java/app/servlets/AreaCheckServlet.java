package app.servlets;

import app.beans.StorageBean;
import org.json.JSONObject;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;

public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        StorageBean storage = (StorageBean) request.getSession().getAttribute("storage");

        long start = System.currentTimeMillis();
        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");

        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        float x = Float.parseFloat(request.getParameter("xVal"));
        float y = Float.parseFloat(request.getParameter("yVal"));
        float r = Float.parseFloat(request.getParameter("rVal"));
        byte quarter = getQuarter(x, y);
        String answer = checkArea(x, y, r, quarter);
        JSONObject jsonAnswer = makeJSON(x, y, r, answer);

        long end = System.currentTimeMillis();
        long subTime = end - start;

        jsonAnswer.put("currentTime", format.format(start));
        jsonAnswer.put("runTime", subTime);

        storage.putJSONAnswer(jsonAnswer);

        PrintWriter writer = response.getWriter();
        writer.println(jsonAnswer);
        writer.close();
    }

    private byte getQuarter(float x, float y){
        if (x > 0 && y > 0)
            return 1;
        if (x < 0 && y > 0)
            return 2;
        if (x < 0 && y < 0)
            return 3;
        if (x > 0 && y < 0)
            return 4;
        return 0;
    }

    private String checkArea(float x, float y, float r, byte quarter){
        switch (quarter){
            case 0: return "Yes";
            case 2:
                if (y <= r/2 && Math.abs(x) <= r)
                    return "Yes";
                break;
            case 3:
                if (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2))
                    return "Yes";
                break;
            case 4:
                if (y >= x - r)
                    return "Yes";
                break;
        }
        return "No";
    }

    private JSONObject makeJSON(float x, float y, float r, String answer){
        JSONObject result = new JSONObject();
        result.put("xVal", x);
        result.put("yVal", y);
        result.put("rVal", r);
        result.put("answer", answer);
        return result;
    }
}
