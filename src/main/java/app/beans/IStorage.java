package app.beans;

import org.json.JSONObject;

import javax.ejb.Local;
import java.util.ArrayList;

@Local
public interface IStorage {
    public ArrayList<JSONObject> getJSONTable();
    public JSONObject getLastJSONAnswer();
    public void putJSONAnswer(JSONObject answer);
}
