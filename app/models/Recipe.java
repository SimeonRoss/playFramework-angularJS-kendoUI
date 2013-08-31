package models;

import java.util.*;
import play.db.ebean.*;
import play.data.validation.Constraints.*;

import javax.persistence.*;

@Entity
public class Recipe extends Model
{
  @Id
  public Long id;
  public String label;
  
  public static Finder<Long,Recipe> find = new Finder<Long,Recipe>(Long.class, Recipe.class);
  
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
    
}