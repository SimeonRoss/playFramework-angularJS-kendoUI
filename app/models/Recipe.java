package models;

import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import play.db.ebean.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@SuppressWarnings("serial")
@Entity
public class Recipe extends Model
{
	@Id
	private Long id;
	private int boilLength;
	private int mashLength;
	private int efficiency;
	private double abv;
	private double boilVolume;
	private double ibus;
	private String og;
	private String fg;
    private String style;
	private String brewName;

	@OneToMany(cascade = CascadeType.ALL)
	private List<HopAddition> hopAdditions;

	public static Finder<Long, Recipe> find = new Finder<Long, Recipe>(Long.class, Recipe.class);

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

    @JsonProperty("hops")
    @JsonSerialize(include=JsonSerialize.Inclusion.NON_NULL)
	public void setHopAdditions(List<HopAddition> hopAdditions)
	{
		this.hopAdditions = hopAdditions;
	}

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }
}