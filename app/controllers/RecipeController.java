package controllers;

import models.Recipe;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ObjectNode;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.io.IOException;

public class RecipeController extends Controller
{
	public static ObjectMapper mapper = new ObjectMapper();

	@BodyParser.Of(BodyParser.Json.class)
	public static Result recipes()
	{
		JsonNode node = mapper.valueToTree(Recipe.all());

		return ok(node);
	}

	@BodyParser.Of(BodyParser.Json.class)
	public static Result recipe(Long id)
	{
		Recipe recipe = Recipe.find.byId(id);
		if (recipe == null)
		{
			return notFound();
		}

		JsonNode node = mapper.valueToTree(recipe);

		return ok(node);
	}

	@BodyParser.Of(BodyParser.Json.class)
	public static Result newRecipe()
	{
		JsonNode json = request().body().asJson();
        Recipe recipe;
		if (json == null)
		{
			return badRequest("Expecting Json data");
		}
		try
		{
			recipe = mapper.readValue(json, Recipe.class);
		} catch (IOException e)
		{
			return badRequest("Cannot read recipe");
		}
		Recipe.create(recipe);

		ObjectNode result = Json.newObject();
		result.put("id", recipe.getId());

		return ok(result);
	}

    @BodyParser.Of(BodyParser.Json.class)
	public static Result updateRecipe(Long id)
	{
		JsonNode json = request().body().asJson();
        Recipe recipe;
		if (json == null)
		{
			return badRequest("Expecting Json data");
		}
		try
		{
			recipe = mapper.readValue(json, Recipe.class);
		} catch (IOException e)
		{
			return badRequest("Cannot read recipe");
		}
		recipe.update();

		ObjectNode result = Json.newObject();
		result.put("id", recipe.getId());

		return ok(result);
	}

	public static Result deleteRecipe(Long id)
	{
		Recipe.delete(id);
		return ok();
	}
}
