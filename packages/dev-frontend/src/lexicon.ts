export type Lexicon = {
  term: string;
  description?: string;
  link?: string;
};

export const BORROW_FEE: Lexicon = {
  term: "Borrowing Fee",
  description:
    "The Borrowing Fee is a one-off fee charged as a percentage of the borrowed amount (in SAI) and is part of a Trove's debt. The fee varies between 0.5% and 5% depending on SAI redemption volumes."
};

export const TVL: Lexicon = {
  term: "TVL",
  description:
    "The Total Value Locked (TVL) is the total value of Ether locked as collateral in the system, given in ETH and USD."
};

export const STAKED_FLO: Lexicon = {
  term: "Staked FLO",
  description: "The total amount of FLO that is staked for earning fee revenue."
};

export const TCR: Lexicon = {
  term: "Total Collateral Ratio",
  description:
    "The ratio of the Dollar value of the entire system collateral at the current ETH:USD price, to the entire system debt."
};

export const RECOVERY_MODE: Lexicon = {
  term: "Recovery Mode",
  description:
    "Recovery Mode is activated when the Total Collateral Ratio (TCR) falls below 150%. When active, your Trove can be liquidated if its collateral ratio is below the TCR. The maximum collateral you can lose from liquidation is capped at 110% of your Trove's debt. Operations are also restricted that would negatively impact the TCR."
};

export const STABILITY_POOL_SAI: Lexicon = {
  term: "SAI in Stability Pool",
  description:
    "The total SAI currently held in the Stability Pool, expressed as an amount and a fraction of the SAI supply."
};

export const KICKBACK_RATE: Lexicon = {
  term: "Kickback Rate",
  description:
    "A rate between 0 and 100% set by the Frontend Operator that determines the fraction of FLO that will be paid out as a kickback to the Stability Providers using the frontend."
};

export const ETH: Lexicon = {
  term: "ETH"
};

export const SAI: Lexicon = {
  term: "SAI"
};

export const FLO: Lexicon = {
  term: "FLO"
};

export const TROVES: Lexicon = {
  term: "Troves",
  description: "The total number of active Troves in the system."
};

export const SAI_SUPPLY: Lexicon = {
  term: "SAI supply",
  description: "The total SAI minted by the Liquity Protocol."
};
