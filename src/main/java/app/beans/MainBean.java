package app.beans;

import org.json.JSONObject;

import javax.ejb.Stateful;
import java.util.ArrayList;

@Stateful
public class MainBean {
    private ArrayList<JSONObject> JSONTable = new ArrayList<JSONObject>();

    public ArrayList<JSONObject> getJSONTable() {
        return JSONTable;
    }

    public JSONObject getLastJSONAnswer(){
        return JSONTable.get(JSONTable.size() - 1);
    }

    public void putJSONAnswer(JSONObject answer){
        JSONTable.add(answer);
    }
}
