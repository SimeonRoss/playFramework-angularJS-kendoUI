package controllers;

import models.Hop;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

public class HopController extends Controller
{
	public static ObjectMapper mapper = new ObjectMapper();

	@BodyParser.Of(BodyParser.Json.class)
	public static Result hops()
	{
		JsonNode node = mapper.valueToTree(Hop.all());

		return ok(node);
	}

	@BodyParser.Of(BodyParser.Json.class)
	public static Result hop(Long id)
	{
		Hop hop = Hop.find.byId(id);
		if (hop == null)
		{
			return notFound();
		}

		JsonNode node = mapper.valueToTree(hop);

		return ok(node);
	}

	@BodyParser.Of(BodyParser.Json.class)
	public static Result newHop()
	{
		return TODO;

	}

	public static Result deleteRecipe(Long id)
	{
		return TODO;
	}
}
