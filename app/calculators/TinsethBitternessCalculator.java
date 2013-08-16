package calculators;

import static calculators.Util.round;

public class TinsethBitternessCalculator implements BitternessCalculator
{
	// TODO constructor, probably from a factory

	public double calculateIBUs( HopAddition addition )
	{
		double bigFactor = getBigFactor( addition.getOpeningGravity() );
		double boilTimeFactor = getBoilTimeFactor( addition.getHopsAddedTimeInMins() );
		double decimalAAUtil = bigFactor * boilTimeFactor;
		double mgPerL = getAlphaAcidConcentration( addition.getAlphaAcidLevel() / 100, addition.getHopsInGms(), addition.getBoilVolume() );

		double ibu = decimalAAUtil * mgPerL;

		return round( ibu ).toDecimalPlaces( 2 );
	}

	private double getAlphaAcidConcentration( double aaRating, double grams, double volume )
	{
		return (aaRating * grams * 1000) / volume;
	}

	private double getBoilTimeFactor( double boilTime )
	{
		return (1 - Math.exp( -0.04 * boilTime )) / 4.15d;
	}

	private double getBigFactor( double gravity )
	{
		return 1.65 * Math.pow( 0.000125, gravity - 1 );
	}

}
