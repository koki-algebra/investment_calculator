/**
 * Investment parameters interface.
 */
export type InvestmentParams = {
  initialInvestment: number; // The initial investment amount
  annualInvestment: number; // The amount invested every year
  expectedReturn: number; // The expected (annual) rate of return
  duration: number; // The investment duration (time frame) in years
};
