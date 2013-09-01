package controllers;

public class ClientHopAddition
{
	private int quantity;
	private int additionTime;
	private double ibu;
	private ClientHop hop;

	public int getQuantity()
	{
		return quantity;
	}

	public void setQuantity(int quantity)
	{
		this.quantity = quantity;
	}

	public int getAdditionTime()
	{
		return additionTime;
	}

	public void setAdditionTime(int additionTime)
	{
		this.additionTime = additionTime;
	}

	public double getIbu()
	{
		return ibu;
	}

	public void setIbu(double ibu)
	{
		this.ibu = ibu;
	}

	public ClientHop getHop()
	{
		return hop;
	}

	public void setHop(ClientHop hop)
	{
		this.hop = hop;
	}

}
