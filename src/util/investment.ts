/**
 * Investment parameters interface.
 */
interface InvestmentParams {
	initialInvestment: number; // The initial investment amount
	annualInvestment: number; // The amount invested every year
	expectedReturn: number; // The expected (annual) rate of return
	duration: number; // The investment duration (time frame) in years
}


/**
 * Calculate investment results based on provided parameters.
 * @param {InvestmentParams} investmentParams - Investment parameters.
 * @returns {Array<Object>} - Array containing investment data for each year.
 */
export function calculateInvestmentResults(investmentParams: InvestmentParams): Array<{
	year: number; // year identifier
	interest: number; // the amount of interest earned in this year
	valueEndOfYear: number; // investment value at end of year
	annualInvestment: number; // investment added in this year
}> {
	const annualData = [];
	let investmentValue = investmentParams.initialInvestment;

	for (let i = 0; i < investmentParams.duration; i++) {
		const interestEarnedInYear = investmentValue * (investmentParams.expectedReturn / 100);
		investmentValue += interestEarnedInYear + investmentParams.annualInvestment;
		annualData.push({
			year: i + 1, // year identifier
			interest: interestEarnedInYear, // the amount of interest earned in this year
			valueEndOfYear: investmentValue, // investment value at end of year
			annualInvestment: investmentParams.annualInvestment, // investment added in this year
		});
	}

	return annualData;
}

/**
 * Formatter object for formatting numbers as currency.
 * This object offers a "format()" method that can be used to format numbers as currency.
 * Example Usage: formatter.format(1000) => yields "$1,000"
 */
export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});