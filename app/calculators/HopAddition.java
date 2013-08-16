package calculators;

import play.libs.F;
import play.mvc.QueryStringBindable;

import java.util.Map;

/**
 * @author RossS
 *         Date: 16/08/13
 *         Time: 2:33 PM
 */
public class HopAddition implements QueryStringBindable<HopAddition>
{
    private double openingGravity;
    private double alphaAcidLevel;
    private double hopsInGms;
    private double hopsAddedTimeInMins;
    private double boilVolume;

    public double getOpeningGravity()
    {
        return openingGravity;
    }

    public void setOpeningGravity(double openingGravity)
    {
        this.openingGravity = openingGravity;
    }

    public double getAlphaAcidLevel() {
        return alphaAcidLevel;
    }

    public void setAlphaAcidLevel(double alphaAcidLevel)
    {
        this.alphaAcidLevel = alphaAcidLevel;
    }

    public double getHopsInGms() {
        return hopsInGms;
    }

    public void setHopsInGms(double hopsInGms)
    {
        this.hopsInGms = hopsInGms;
    }

    public double getHopsAddedTimeInMins()
    {
        return hopsAddedTimeInMins;
    }

    public void setHopsAddedTimeInMins(double hopsAddedTimeInMins)
    {
        this.hopsAddedTimeInMins = hopsAddedTimeInMins;
    }

    public double getBoilVolume()
    {
        return boilVolume;
    }

    public void setBoilVolume(double boilVolume)
    {
        this.boilVolume = boilVolume;
    }


    @Override
    public F.Option<HopAddition> bind(String s, Map<String, String[]> stringMap)
    {
        try
        {
            setOpeningGravity(Double.parseDouble(stringMap.get("openingGravity")[0]));
            setAlphaAcidLevel(Double.parseDouble(stringMap.get("alphaAcidLevel")[0]));
            setHopsAddedTimeInMins(Double.parseDouble(stringMap.get("hopsBoilTime")[0]));
            setHopsInGms(Double.parseDouble(stringMap.get("hopsInGms")[0]));
            setBoilVolume(Double.parseDouble(stringMap.get("boilVolume")[0]));
        } catch (NumberFormatException e)
        {
            return F.Option.None();
        }
        return F.Option.Some(this);
    }

    @Override
    public String unbind(String s) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String javascriptUnbind() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}
