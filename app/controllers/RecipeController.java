package controllers;

import java.io.IOException;

import models.Recipe;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

public class RecipeController extends Controller
{
	public static ObjectMapper mapper = new ObjectMapper();

	public static Result recipes()
	{
		return TODO;
	}

	@BodyParser.Of(BodyParser.Json.class)
	public static Result newRecipe() throws JsonParseException,
			JsonMappingException, IOException
	{
		JsonNode json = request().body().asJson();
		if (json == null)
		{
			return badRequest("Expecting Json data");
		}
		mapper.readValue(json, Object.class);
		;
		String name = json.findPath("name").getTextValue();
		if (name == null)
		{
			return badRequest("Missing parameter [name]");
		} else
		{
			return ok("Hello " + name);
		}
	}

	public static Result deleteRecipe(Long id)
	{
		Recipe.delete(id);
		return ok();
	}
}
