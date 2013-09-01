package models;

import javax.persistence.Entity;
import javax.persistence.Id;

import play.db.ebean.Model;
import controllers.ClientHopAddition;

@SuppressWarnings("serial")
@Entity
public class HopAddition extends Model
{
	@Id
	private Long id;
	private int quantity;
	private int additionTime;
	private double ibu;
	private int hopId;

	public static HopAddition fromClientData(ClientHopAddition clientHopAddition)
	{
		HopAddition addition = new HopAddition();
		addition.setAdditionTime(clientHopAddition.getAdditionTime());
		addition.setHopId(clientHopAddition.getHop().getId());
		addition.setIbu(clientHopAddition.getIbu());
		addition.setQuantity(clientHopAddition.getQuantity());

		return addition;
	}

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

	public int getHopId()
	{
		return hopId;
	}

	public void setHopId(int hopId)
	{
		this.hopId = hopId;
	}

}
