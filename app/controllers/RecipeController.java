package controllers;

import models.HopAddition;
import models.Recipe;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ObjectNode;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
	public static Result newRecipe()
	{
		JsonNode json = request().body().asJson();
		ClientRecipe clientRecipe;
		if (json == null)
		{
			return badRequest("Expecting Json data");
		}
		try
		{
			clientRecipe = mapper.readValue(json, ClientRecipe.class);
		} catch (IOException e)
		{
			return badRequest("Cannot read recipe");
		}
		Recipe recipe = Recipe.fromClientData(clientRecipe);

		List<HopAddition> hops = new ArrayList<>();
		for (ClientHopAddition hopAddition : clientRecipe.getHops())
		{
			hops.add(HopAddition.fromClientData(hopAddition));
		}
		recipe.setHopAdditions(hops);

		Recipe.create(recipe);

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
