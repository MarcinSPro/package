import { Decimal } from "@fluid/lib-base";

type Idle = "IDLE";
type Creating = "CREATING";
type Cancelling = "CANCELLING";
type Claiming = "CLAIMING";
type Swapping = "SWAPPING";
type ManagingLiquidity = "MANAGING_LIQUIDITY";

export type BondView = Idle | Creating | Cancelling | Claiming | Swapping | ManagingLiquidity;

/* UI events */
type CreateBondPressed = "CREATE_BOND_PRESSED";
type CancelPressed = "ABORT_PRESSED";
type BackPressed = "BACK_PRESSED";
type ApprovePressed = "APPROVE_PRESSED";
type ConfirmPressed = "CONFIRM_PRESSED";
type CancelBondPressed = "CANCEL_BOND_PRESSED";
type ClaimBondPressed = "CLAIM_BOND_PRESSED";
type SwapPressed = "SWAP_PRESSED";
type AddLiquidityPressed = "ADD_LIQUIDITY_PRESSED";
type ManageLiquidityPressed = "MANAGE_LIQUIDITY_PRESSED";

/* On-chain events */
type CreateBondConfirmed = "CREATE_BOND_CONFIRMED";
type CancelBondConfirmed = "CANCEL_BOND_CONFIRMED";
type ClaimBondConfirmed = "CLAIM_BOND_CONFIRMED";
type SwapConfirmed = "SWAP_CONFIRMED";
type ManageLiquidityConfirmed = "MANAGE_LIQUIDITY_CONFIRMED";

export type BondEvent =
  | CreateBondPressed
  | CancelBondPressed
  | ClaimBondPressed
  | SwapPressed
  | AddLiquidityPressed
  | ManageLiquidityPressed
  | ApprovePressed
  | ConfirmPressed
  | CancelPressed
  | BackPressed
  | CreateBondConfirmed
  | CancelBondConfirmed
  | ClaimBondConfirmed
  | SwapConfirmed
  | ManageLiquidityConfirmed;

type BondEventTransitions = Record<BondView, Partial<Record<BondEvent, BondView>>>;

export const transitions: BondEventTransitions = {
  IDLE: {
    CREATE_BOND_PRESSED: "CREATING",
    CANCEL_BOND_PRESSED: "CANCELLING",
    CLAIM_BOND_PRESSED: "CLAIMING",
    SWAP_PRESSED: "SWAPPING",
    MANAGE_LIQUIDITY_PRESSED: "MANAGING_LIQUIDITY"
  },
  CREATING: {
    ABORT_PRESSED: "IDLE",
    CREATE_BOND_CONFIRMED: "IDLE",
    BACK_PRESSED: "IDLE",
    APPROVE_PRESSED: "CREATING",
    CONFIRM_PRESSED: "CREATING"
  },
  CLAIMING: {
    ABORT_PRESSED: "IDLE",
    BACK_PRESSED: "IDLE",
    CONFIRM_PRESSED: "CLAIMING",
    CLAIM_BOND_CONFIRMED: "IDLE"
  },
  CANCELLING: {
    ABORT_PRESSED: "IDLE",
    BACK_PRESSED: "IDLE",
    CONFIRM_PRESSED: "CANCELLING",
    CANCEL_BOND_CONFIRMED: "IDLE"
  },
  SWAPPING: {
    ABORT_PRESSED: "IDLE",
    BACK_PRESSED: "IDLE",
    APPROVE_PRESSED: "SWAPPING",
    CONFIRM_PRESSED: "SWAPPING",
    SWAP_CONFIRMED: "IDLE"
  },
  MANAGING_LIQUIDITY: {
    ABORT_PRESSED: "IDLE",
    BACK_PRESSED: "IDLE",
    APPROVE_PRESSED: "MANAGING_LIQUIDITY",
    CONFIRM_PRESSED: "MANAGING_LIQUIDITY",
    MANAGE_LIQUIDITY_CONFIRMED: "IDLE"
  }
};

export enum BSaiAmmTokenIndex {
  BSAI,
  SAI,
  BSAI_SAI_LP
}

export type CreateBondPayload = { deposit: Decimal };

export type SelectBondPayload = { bondId: string };

export type SwapPressedPayload = {
  inputToken: BSaiAmmTokenIndex.BSAI | BSaiAmmTokenIndex.SAI;
};

export type SwapPayload = {
  inputAmount: Decimal;
  minOutputAmount: Decimal;
};

export type Address = string | null;

export type Addresses = {
  BSAI_AMM_ADDRESS: Address;
  BSAI_AMM_STAKING_ADDRESS: Address;
  BSAI_TOKEN_ADDRESS: Address;
  BOND_NFT_ADDRESS: Address;
  CHICKEN_BOND_MANAGER_ADDRESS: Address;
  SAI_OVERRIDE_ADDRESS: Address;
  BSAI_LP_ZAP_ADDRESS: Address;
};

// This payload is only dispatched by "Manage liquidity"
export type ApprovePressedPayload = {
  tokensNeedingApproval: Map<BSaiAmmTokenIndex, Address>;
};

export type AddLiquidityPayload = {
  action: "addLiquidity";
  bSaiAmount: Decimal;
  saiAmount: Decimal;
  minLpTokens: Decimal;
  shouldStakeInGauge: boolean;
};

export type RemoveLiquidityPayload = {
  action: "removeLiquidity";
  burnLpTokens: Decimal;
  minBSaiAmount: Decimal;
  minSaiAmount: Decimal;
};

export type RemoveLiquidityOneCoinPayload = {
  action: "removeLiquidityOneCoin";
  burnLpTokens: Decimal;
  output: BSaiAmmTokenIndex;
  minAmount: Decimal;
};

export type StakeLiquidityPayload = {
  action: "stakeLiquidity";
  stakeAmount: Decimal;
};

export type UnstakeLiquidityPayload = {
  action: "unstakeLiquidity";
  unstakeAmount: Decimal;
};

export type ClaimLpRewardsPayload = {
  action: "claimLpRewards";
};

export type ManageLiquidityPayload =
  | AddLiquidityPayload
  | RemoveLiquidityPayload
  | RemoveLiquidityOneCoinPayload
  | StakeLiquidityPayload
  | UnstakeLiquidityPayload
  | ClaimLpRewardsPayload;

export type Payload =
  | CreateBondPayload
  | SelectBondPayload
  | SwapPressedPayload
  | SwapPayload
  | ApprovePressedPayload
  | ManageLiquidityPayload;

export type BondStatus = "NON_EXISTENT" | "PENDING" | "CANCELLED" | "CLAIMED";

export type Bond = {
  id: string;
  deposit: Decimal;
  startTime: number;
  endTime: number;
  status: BondStatus;
  tokenUri: string;
  accrued: Decimal;
  breakEvenAccrual: Decimal;
  rebondAccrual: Decimal;
  breakEvenTime: Date;
  rebondTime: Date;
  marketValue: Decimal;
  rebondReturn: number;
  rebondRoi: number;
  rebondApr: number;
  claimNowReturn: number;
  claimedAmount?: Decimal;
  bondAgeInDays: number;
  remainingRebondDays: number;
  remainingBreakEvenDays: number;
};

export type OptimisticBond = Pick<Bond, "id" | "deposit" | "startTime" | "status">;

export type Treasury = {
  pending: Decimal;
  reserve: Decimal;
  permanent: Decimal;
  total: Decimal;
};

export type Stats = {
  pendingBonds: Decimal;
  cancelledBonds: Decimal;
  claimedBonds: Decimal;
  totalBonds: Decimal;
};

export type ProtocolInfo = {
  treasury: Treasury;
  bSaiSupply: Decimal;
  marketPrice: Decimal;
  fairPrice: { lower: Decimal; upper: Decimal };
  floorPrice: Decimal;
  claimBondFee: Decimal;
  alphaAccrualFactor: Decimal;
  marketPricePremium: Decimal;
  hasMarketPremium: boolean;
  simulatedMarketPrice: Decimal;
  breakEvenAccrualFactor: Decimal;
  rebondAccrualFactor: Decimal;
  breakEvenPeriodInDays: Decimal;
  rebondPeriodInDays: Decimal;
  yieldAmplification?: Decimal;
  bSaiApr?: Decimal;
  bSaiLpApr?: Decimal;
  controllerTargetAge: Decimal;
  averageBondAge: Decimal;
  floorPriceWithoutPendingHarvests: Decimal;
  windDownPrice: Decimal;
};

export type TransactionStatus = "IDLE" | "PENDING" | "CONFIRMED" | "FAILED";

export type BondTransaction =
  | "APPROVE"
  | "CREATE"
  | "CANCEL"
  | "CLAIM"
  | "APPROVE_AMM"
  | "APPROVE_SPENDER"
  | "SWAP"
  | "MANAGE_LIQUIDITY";

export type BondTransactionStatuses = Record<BondTransaction, TransactionStatus>;

export type Maybe<T> = T | undefined;

export type BSaiLpRewards = Array<{ name: string; address: string; amount: Decimal }>;
