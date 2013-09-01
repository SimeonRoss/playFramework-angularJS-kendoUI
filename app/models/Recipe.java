package models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import play.db.ebean.Model;
import controllers.ClientRecipe;

@SuppressWarnings("serial")
@Entity
public class Recipe extends Model
{
	@Id
	private Long id;
	private String brewName;
	private double boilVolume;
	private int boilLength;
	private int mashLength;
	private String og;
	private String fg;
	private double ibus;
	private int efficiency;
	private double abv;

	@OneToMany(cascade = CascadeType.ALL)
	private List<HopAddition> hopAdditions;

	private static Finder<Long, Recipe> find = new Finder<Long, Recipe>(Long.class, Recipe.class);

	public static List<Recipe> all()
	{
		return find.all();
	}

	public static void create(Recipe recipe)
	{
		recipe.save();
	}

	public static void delete(Long id)
	{
		find.ref(id).delete();
	}

	public static Recipe fromClientData(ClientRecipe clientRecipe)
	{
		Recipe recipe = new Recipe();
		recipe.setAbv(clientRecipe.getAbv());
		recipe.setBoilLength(clientRecipe.getBoilLength());
		recipe.setBoilVolume(clientRecipe.getBoilVolume());
		recipe.setBrewName(clientRecipe.getBrewName());
		recipe.setEfficiency(clientRecipe.getEfficiency());
		recipe.setFg(clientRecipe.getFg());
		recipe.setIbus(clientRecipe.getIbus());
		recipe.setMashLength(clientRecipe.getMashLength());
		recipe.setOg(clientRecipe.getOg());

		return recipe;
	}

	protected Recipe()
	{
	}

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public String getBrewName()
	{
		return brewName;
	}

	public void setBrewName(String brewName)
	{
		this.brewName = brewName;
	}

	public double getBoilVolume()
	{
		return boilVolume;
	}

	public void setBoilVolume(double boilVolume)
	{
		this.boilVolume = boilVolume;
	}

	public int getBoilLength()
	{
		return boilLength;
	}

	public void setBoilLength(int boilLength)
	{
		this.boilLength = boilLength;
	}

	public int getMashLength()
	{
		return mashLength;
	}

	public void setMashLength(int mashLength)
	{
		this.mashLength = mashLength;
	}

	public String getOg()
	{
		return og;
	}

	public void setOg(String og)
	{
		this.og = og;
	}

	public String getFg()
	{
		return fg;
	}

	public void setFg(String fg)
	{
		this.fg = fg;
	}

	public double getIbus()
	{
		return ibus;
	}

	public void setIbus(double ibus)
	{
		this.ibus = ibus;
	}

	public int getEfficiency()
	{
		return efficiency;
	}

	public void setEfficiency(int efficiency)
	{
		this.efficiency = efficiency;
	}

	public double getAbv()
	{
		return abv;
	}

	public void setAbv(double abv)
	{
		this.abv = abv;
	}

	public List<HopAddition> getHopAdditions()
	{
		return hopAdditions;
	}

	public void setHopAdditions(List<HopAddition> hopAdditions)
	{
		this.hopAdditions = hopAdditions;
	}

}