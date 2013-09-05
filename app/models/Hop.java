package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Hop  extends Model
{
    public static Finder<Long, Hop> find = new Finder<>(Long.class, Hop.class);

    public static List<Hop> all() {
        return find.all();
    }

    @Id
	private Long id;
	private String name;
	private String alphaAcid;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getAlphaAcid()
	{
		return alphaAcid;
	}

	public void setAlphaAcid(String alphaAcid)
	{
		this.alphaAcid = alphaAcid;
	}
}
