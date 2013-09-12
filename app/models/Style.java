package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Style extends Model {

    public static Finder<Long, Style> find = new Finder<Long, Style>(Long.class, Style.class);

    public static List<Style> all() {
        return find.all();
    }

    @Id
    private String code;
    private String category;
    private String subCategory;
    private Double ibuMin;
    private Double ibuMax;
    private Double srmMin;
    private Double srmMax;
    private Double ogMin;
    private Double ogMax;
    private Double fgMin;
    private Double fgMax;
    private Double abvMin;
    private Double abvMax;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }

    public Double getIbuMin() {
        return ibuMin;
    }

    public void setIbuMin(Double ibuMin) {
        this.ibuMin = ibuMin;
    }

    public Double getIbuMax() {
        return ibuMax;
    }

    public void setIbuMax(Double ibuMax) {
        this.ibuMax = ibuMax;
    }

    public Double getSrmMin() {
        return srmMin;
    }

    public void setSrmMin(Double srmMin) {
        this.srmMin = srmMin;
    }

    public Double getSrmMax() {
        return srmMax;
    }

    public void setSrmMax(Double srmMax) {
        this.srmMax = srmMax;
    }

    public Double getOgMin() {
        return ogMin;
    }

    public void setOgMin(Double ogMin) {
        this.ogMin = ogMin;
    }

    public Double getOgMax() {
        return ogMax;
    }

    public void setOgMax(Double ogMax) {
        this.ogMax = ogMax;
    }

    public Double getFgMin() {
        return fgMin;
    }

    public void setFgMin(Double fgMin) {
        this.fgMin = fgMin;
    }

    public Double getFgMax() {
        return fgMax;
    }

    public void setFgMax(Double fgMax) {
        this.fgMax = fgMax;
    }

    public Double getAbvMin() {
        return abvMin;
    }

    public void setAbvMin(Double abvMin) {
        this.abvMin = abvMin;
    }

    public Double getAbvMax() {
        return abvMax;
    }

    public void setAbvMax(Double abvMax) {
        this.abvMax = abvMax;
    }
}
