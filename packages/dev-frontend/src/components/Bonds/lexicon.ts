import type { Lexicon } from "../../lexicon";

export const PENDING_BONDS: Lexicon = {
  term: "Pending bonds",
  description: "Your active bonds which are accruing bSAI and can be claimed or cancelled."
};

export const BONDS: Lexicon = {
  term: "Bonds",
  description: "List of your pending bonds and bonds you have claimed or cancelled in the past."
};

export const NOT_BONDED_YET: Lexicon = {
  term: "You don't have any pending bonds.",
  description:
    "You can bond SAI to obtain Boosted SAI (bSAI) - a yield-amplified version of SAI."
};

export const BONDS_NAVIGATION: Lexicon = {
  term: "Bonds"
};

export const BOND_CREATED: Lexicon = {
  term: "Bond created",
  description:
    "The date you created your bond. The bSAI accrual starts at 0 and increases over time."
};

export const AVAILABLE_BONDS: Lexicon = {
  term: "Available bonds",
  description: "The types of bonds you can create."
};

export const BOND_ASSET: Lexicon = {
  term: "Asset",
  description: "The type of token accepted for bonding."
};

export const BOND_NFT: Lexicon = {
  term: "NFT",
  description:
    "Bonds are represented as unique visual NFTs. The NFT image evolves when your bond is claimed or cancelled."
};

export const BREAK_EVEN_TIME: Lexicon = {
  term: "Break-even time",
  description:
    "Estimated time at which the bond will have accrued enough bSAI to offset the SAI cost of the bond, under current market prices."
};

export const OPTIMUM_REBOND_TIME: Lexicon = {
  term: "Rebond time",
  description:
    "Estimated optimum time to claim the bond, sell the bSAI for SAI, and then bond again, to maximize your return under current market prices."
};

export const REBOND_RETURN: Lexicon = {
  term: `${OPTIMUM_REBOND_TIME.term} return`,
  description: `Estimated return from selling your accrued bSAI to SAI at the ${OPTIMUM_REBOND_TIME.term}, minus the initial SAI cost of the bond, under current market prices.`
};

export const REBOND_TIME_ROI: Lexicon = {
  term: `${OPTIMUM_REBOND_TIME.term} ROI`,
  description: `Estimated ROI of selling your accrued bSAI to SAI at the ${OPTIMUM_REBOND_TIME.term}, minus the initial SAI cost of the bond, under current market prices.`
};

export const OPTIMUM_APY: Lexicon = {
  term: "Max APR",
  description: `Estimated APY of continuously bonding and claiming at the ${OPTIMUM_REBOND_TIME.term}, under current market prices. Rebonding at other times could lead to a lower APY.`
};

export const OPTIMUM_ACCRUAL: Lexicon = {
  term: "Rebond accrual",
  description: `The required amount of bSAI to accrue for the ${OPTIMUM_REBOND_TIME.term}, under current market prices.`,
  link: "https://docs.chickenbonds.org/faq/economic-design#_44lrt4qpho3a"
};

export const BOND_DEPOSIT: Lexicon = {
  term: "Deposit",
  description:
    "The amount deposited into the bond, which can be fully recovered by cancelling the bond."
};

export const ACCRUED_AMOUNT: Lexicon = {
  term: "Accruing",
  description: "The amount of bSAI this bond has accrued so far."
};

export const MARKET_VALUE: Lexicon = {
  term: "Accrued value",
  description:
    "Current market value of the accrued bSAI. The bSAI market price can fluctuate but will always be higher than the floor price under rational market conditions."
};

export const BOND_AGE: Lexicon = {
  term: "Age",
  description: "Time elapsed since the creation of the bond."
};

export const BOND_RETURN: Lexicon = {
  term: "Claim-now return",
  description:
    "Expected SAI gained from claiming the bond now and selling the bSAI for SAI and deducting the initial cost of the bond, under current market prices.",
  link: "https://docs.chickenbonds.org/faq/economic-design#_44lrt4qpho3a"
};

export const BOND_STATUS: Lexicon = {
  term: "Status",
  description: "One of three values: Pending, Cancelled, or Claimed."
};

export const PENDING_STATUS: Lexicon = {
  term: "Pending",
  description: "An active bond which is accruding bSAI and can be cancelled or claimed."
};

export const CANCELLED_STATUS: Lexicon = {
  term: "Cancelled",
  description: "A bond which you cancelled."
};

export const CLAIMED_STATUS: Lexicon = {
  term: "Claimed",
  description: "A bond which you claimed."
};

export const CANCEL_BOND: Lexicon = {
  term: "Cancel bond",
  description:
    "A bond can be cancelled at any time to recover the initially deposited SAI amount while forgoing the accrued bSAI.",
  link: "https://docs.chickenbonds.org/faq/basic-usage#_rwpo6dhx26fq"
};

export const CLAIM_BOND: Lexicon = {
  term: "Claim bond",
  description:
    "A bond can be claimed at any time to forgo the initially deposited SAI amount and gain the accrued bSAI.",
  link: "https://docs.chickenbonds.org/faq/basic-usage#_2c022erjceom"
};

export const BSAI_MARKET_PRICE: Lexicon = {
  term: "Market price",
  description: "The current price of bSAI according to the bSAI Curve pool."
};

export const BSAI_FAIR_PRICE: Lexicon = {
  term: "Fair price",
  description:
    "An estimated range of the market price of bSAI based on the current yield amplification. The lower bound excludes the Pending bucket, the upper bound factors all buckets.",
  link: "https://docs.chickenbonds.org/faq/economic-design#how-is-the-fair-price-calculated"
};

export const TOTAL_BONDS_STATISTIC: Lexicon = {
  term: "Total bonds",
  description: "The total number of bonds including: cancelled, claimed and pending."
};

export const PENDING_BONDS_STATISTIC: Lexicon = {
  term: "Pending bonds",
  description:
    "The current number of active bonds in the system which are not yet claimed or cancelled."
};

export const CANCELLED_BONDS_STATISTIC: Lexicon = {
  term: "Cancelled bonds",
  description: "The total number of bonds which were cancelled."
};

export const CLAIMED_BONDS_STATISTIC: Lexicon = {
  term: "Claimed bonds",
  description: "The total number of bonds which were claimed."
};

export const BSAI_SUPPLY: Lexicon = {
  term: "Total supply",
  description: "The total amount of bSAI in circulation. Not including pending bonds accrued bSAI."
};

export const BSAI_FLOOR_PRICE: Lexicon = {
  term: "Floor price",
  description:
    "The amount of SAI that an arbitrageur could redeem bSAI for thus creating a lower bound bSAI market price.",
  link: "https://docs.chickenbonds.org/faq/economic-design#_c2c3valbf2bj-1"
};

export const BSAI_WIND_DOWN_PRICE: Lexicon = {
  term: "Net asset value",
  description:
    "The protocol supports a graceful wind down mechanism for migration purposes, whereby Yearn Finance governance can trigger a special function which moves the Permanent bucket SAI into the Reserve, thus enabling all bSAI to be redeemed for a higher floor price.",
  link:
    "https://docs.chickenbonds.org/faq/potential-future-system-migration#what-is-the-wind-down-functionality"
};

export const BSAI_APR: Lexicon = {
  term: "bSAI APR",
  description: "The APR of bSAI, based on the yield generated from each bucket in the Treasury.",
  link: "https://docs.chickenbonds.org/faq/economic-design#_c2c3valbf2bj"
};

export const BSAI_LP_APR: Lexicon = {
  term: "LP APR",
  description:
    "The APR from providing liquidity to the bSAI/SAI-3CRV pool. A combination of SAI rewards from Chicken-in fees and Curve rewards.",
  link: "https://docs.chickenbonds.org/faq/economic-design#_1qcmo1v5zahs"
};

export const BSAI_YIELD_AMPLIFICATION: Lexicon = {
  term: "Yield amplification",
  description:
    "The bSAI token generates a yield which is a multiple of the Stability Pool yield. It is derived from the total protocol yield which is being diverted to the Reserve bucket.",
  link: "https://docs.chickenbonds.org/faq/economic-design#yield-amplification"
};

export const TREASURY_TOTAL: Lexicon = {
  term: "Total",
  description:
    "The total amount of SAI held by the protocol within the three buckets (Pending, Reserve, Permanent).",
  link: "https://docs.chickenbonds.org/faq/technical-design#_ydtvzh456fiz"
};

export const TREASURY_PENDING: Lexicon = {
  term: "Pending",
  description:
    "Contains the deposited SAI of the users while they bond. Pending bonds can be claimed or cancelled any time, moving the SAI into the Reserve and Permanent buckets, or back to the bonder, respectively.",
  link: "https://docs.chickenbonds.org/faq/technical-design#_ydtvzh456fiz"
};

export const TREASURY_ACQUIRED: Lexicon = {
  term: "Reserve",
  description:
    "Contains a portion of the SAI obtained from claimed bonds and captures the yield from the entire Treasury. It acts as a reserve backing the bSAI supply. bSAI can be redeemed for a pro-rata share of the SAI held in the Reserve bucket.",
  link: "https://docs.chickenbonds.org/faq/technical-design#_ydtvzh456fiz"
};

export const TREASURY_PERMANENT: Lexicon = {
  term: "Permanent",
  description:
    "Contains a portion of the SAI obtained from claimed bonds which contributes a permanent price premium over SAI. The SAI in this bucket is not redeemable.",
  link: "https://docs.chickenbonds.org/faq/technical-design#_ydtvzh456fiz"
};

export const ESTIMATES_ONLY_NOTICE = {
  description: "These metrics are estimations based on the current bSAI market price",
  link: "https://docs.chickenbonds.org/faq/economic-design#_lnta1xbq350e"
};

export const INFINITE_ESTIMATION = {
  description:
    "The bSAI market price premium is currently too low to make bonding profitable. Bonds will be profitable again if the premium returns. Buying bSAI from the market currently generates a higher return than bonding.",
  link:
    "https://docs.chickenbonds.org/faq/basic-usage#what-should-the-market-price-be-in-order-for-bonding-to-be-profitable"
};
