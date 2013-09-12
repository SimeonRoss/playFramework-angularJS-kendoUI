package controllers;

import models.Style;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

public class StyleController extends Controller
{
	public static ObjectMapper mapper = new ObjectMapper();

	@BodyParser.Of(BodyParser.Json.class)
	public static Result styles()
	{
		JsonNode node = mapper.valueToTree(Style.all());

		return ok(node);
	}
}
