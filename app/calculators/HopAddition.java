package calculators;

import org.springframework.beans.DirectFieldAccessor;
import play.libs.F;
import play.mvc.QueryStringBindable;

import java.util.Map;

public class HopAddition implements QueryStringBindable<HopAddition>
{
    private double openingGravity;
    private double alphaAcidLevel;
    private double hopsInGms;
    private double hopsAddedTimeInMins;
    private double boilVolume;
    private double boilDuration;

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

    public double getBoilDuration()
    {
        return boilDuration;
    }

    public void setBoilDuration(double boilDuration)
    {
        this.boilDuration = boilDuration;
    }

    @Override
    public F.Option<HopAddition> bind(String s, Map<String, String[]> stringMap)
    {
        DirectFieldAccessor dfa = new DirectFieldAccessor(this);
        for (String key : stringMap.keySet())
        {
            if (dfa.isWritableProperty(key))
            {
                dfa.setPropertyValue(key, stringMap.get(key)[0]);
            }
        }
        return F.Option.Some(this);
    }

    @Override
    public String unbind(String s)
    {
        return null;
    }

    @Override
    public String javascriptUnbind()
    {
        return null;
    }
}
