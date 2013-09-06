package models;

import play.db.ebean.Model;

import javax.persistence.*;

@SuppressWarnings("serial")
@Entity
public class HopAddition extends Model
{
	@Id
	private Long id;
	private int quantity;
	private int additionTime;
	private double ibu;

    @ManyToOne(fetch = FetchType.EAGER)
    private Hop hop;

	protected HopAddition()
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

	public Hop getHop()
	{
		return hop;
	}

	public void setHop(Hop hop)
	{
		this.hop = hop;
	}

}
