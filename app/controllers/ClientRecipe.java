package controllers;

import java.util.List;

public class ClientRecipe
{
	private String brewName;
	private double boilVolume;
	private int boilLength;
	private int mashLength;
	private String og;
	private String fg;
	private double ibus;
	private int efficiency;
	private double abv;
	private List<ClientHopAddition> hops;

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

	public List<ClientHopAddition> getHops()
	{
		return hops;
	}

	public void setHops(List<ClientHopAddition> hops)
	{
		this.hops = hops;
	}

}
