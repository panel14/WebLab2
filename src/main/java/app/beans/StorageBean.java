package app.beans;

import org.json.JSONObject;
import java.util.ArrayList;

public class StorageBean {
    private ArrayList<JSONObject> JSONTable ;

    public StorageBean(){
        this.JSONTable = new ArrayList<JSONObject>();
    }

    public ArrayList<JSONObject> getJSONTable() {
        return JSONTable;
    }

    public JSONObject getLastJSONAnswer(){
        return JSONTable.get(JSONTable.size() - 1);
    }

    public void putJSONAnswer(JSONObject answer){
        JSONTable.add(answer);
    }

    public void cleanJSONTable(){
        JSONTable.clear();
    }
}
