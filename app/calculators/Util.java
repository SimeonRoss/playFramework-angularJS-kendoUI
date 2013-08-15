package calculators;

import java.math.BigDecimal;

public class Util
{
	private Util()
	{
		throw new AssertionError( "Don't" );
	}

	public static NumberRounder round( double number )
	{
		return new NumberRounder( number );
	}

	public static class NumberRounder
	{
		private double number;

		private NumberRounder( double number )
		{
			this.number = number;
		}

		public double toDecimalPlaces( int places )
		{
			BigDecimal bd = new BigDecimal( Double.toString( number ) );
			return bd.setScale( places, BigDecimal.ROUND_HALF_EVEN ).doubleValue();
		}
	}
}
