package controllers;

import calculators.HopAddition;
import calculators.TinsethBitternessCalculator;
import org.codehaus.jackson.node.ObjectNode;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;


public class IbuController extends Controller
{
    private static TinsethBitternessCalculator tCalc = new TinsethBitternessCalculator();

    @BodyParser.Of(BodyParser.Json.class)
	public static Result calcIndividualIbu(HopAddition addition)
	{
        ObjectNode result = Json.newObject();
        result.put("ibu", tCalc.calculateIBUs(addition));

        return ok(result);
	}


}
