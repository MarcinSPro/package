<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [PopulatableSeisFluid](./lib-ethers.populatableethersfluid.md)

## PopulatableSeisFluid class

Seis-based implementation of [PopulatableFluid](./lib-base.populatablefluid.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare class PopulatableSeisFluid implements PopulatableFluid<SeisTransactionReceipt, SeisTransactionResponse, SeisPopulatedTransaction> 
```
<b>Implements:</b> [PopulatableFluid](./lib-base.populatablefluid.md)<!-- -->&lt;[SeisTransactionReceipt](./lib-ethers.etherstransactionreceipt.md)<!-- -->, [SeisTransactionResponse](./lib-ethers.etherstransactionresponse.md)<!-- -->, [SeisPopulatedTransaction](./lib-ethers.etherspopulatedtransaction.md)<!-- -->&gt;

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(readable)](./lib-ethers.populatableethersfluid._constructor_.md) |  | Constructs a new instance of the <code>PopulatableSeisFluid</code> class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [adjustTrove(params, maxBorrowingRateOrOptionalParams, overrides)](./lib-ethers.populatableethersfluid.adjusttrove.md) |  | Adjust existing Trove by changing its collateral, debt, or both. |
|  [approveUniTokens(allowance, overrides)](./lib-ethers.populatableethersfluid.approveunitokens.md) |  | Allow the liquidity mining contract to use Uniswap SEI/SAI LP tokens for [staking](./lib-base.transactablefluid.stakeunitokens.md)<!-- -->. |
|  [borrowSAI(amount, maxBorrowingRate, overrides)](./lib-ethers.populatableethersfluid.borrowlusd.md) |  | Adjust existing Trove by borrowing more SAI. |
|  [claimCollateralSurplus(overrides)](./lib-ethers.populatableethersfluid.claimcollateralsurplus.md) |  | Claim leftover collateral after a liquidation or redemption. |
|  [closeTrove(overrides)](./lib-ethers.populatableethersfluid.closetrove.md) |  | Close existing Trove by repaying all debt and withdrawing all collateral. |
|  [depositCollateral(amount, overrides)](./lib-ethers.populatableethersfluid.depositcollateral.md) |  | Adjust existing Trove by depositing more collateral. |
|  [depositSAIInStabilityPool(amount, frontendTag, overrides)](./lib-ethers.populatableethersfluid.depositlusdinstabilitypool.md) |  | Make a new Stability Deposit, or top up existing one. |
|  [exitLiquidityMining(overrides)](./lib-ethers.populatableethersfluid.exitliquiditymining.md) |  | Withdraw all staked LP tokens from liquidity mining and claim reward. |
|  [liquidate(address, overrides)](./lib-ethers.populatableethersfluid.liquidate.md) |  | Liquidate one or more undercollateralized Troves. |
|  [liquidateUpTo(maximumNumberOfTrovesToLiquidate, overrides)](./lib-ethers.populatableethersfluid.liquidateupto.md) |  | Liquidate the least collateralized Troves up to a maximum number. |
|  [openTrove(params, maxBorrowingRateOrOptionalParams, overrides)](./lib-ethers.populatableethersfluid.opentrove.md) |  | Open a new Trove by depositing collateral and borrowing SAI. |
|  [redeemSAI(amount, maxRedemptionRate, overrides)](./lib-ethers.populatableethersfluid.redeemlusd.md) |  | Redeem SAI to native currency (e.g. Sei) at face value. |
|  [registerFrontend(kickbackRate, overrides)](./lib-ethers.populatableethersfluid.registerfrontend.md) |  | Register current wallet address as a Fluid frontend. |
|  [repaySAI(amount, overrides)](./lib-ethers.populatableethersfluid.repaylusd.md) |  | Adjust existing Trove by repaying some of its debt. |
|  [sendFLO(toAddress, amount, overrides)](./lib-ethers.populatableethersfluid.sendlqty.md) |  | Send FLO tokens to an address. |
|  [sendSAI(toAddress, amount, overrides)](./lib-ethers.populatableethersfluid.sendlusd.md) |  | Send SAI tokens to an address. |
|  [stakeFLO(amount, overrides)](./lib-ethers.populatableethersfluid.stakelqty.md) |  | Stake FLO to start earning fee revenue or increase existing stake. |
|  [stakeUniTokens(amount, overrides)](./lib-ethers.populatableethersfluid.stakeunitokens.md) |  | Stake Uniswap SEI/SAI LP tokens to participate in liquidity mining and earn FLO. |
|  [transferCollateralGainToTrove(overrides)](./lib-ethers.populatableethersfluid.transfercollateralgaintotrove.md) |  | Transfer [collateral gain](./lib-base.stabilitydeposit.collateralgain.md) from Stability Deposit to Trove. |
|  [unstakeFLO(amount, overrides)](./lib-ethers.populatableethersfluid.unstakelqty.md) |  | Withdraw FLO from staking. |
|  [unstakeUniTokens(amount, overrides)](./lib-ethers.populatableethersfluid.unstakeunitokens.md) |  | Withdraw Uniswap SEI/SAI LP tokens from liquidity mining. |
|  [withdrawCollateral(amount, overrides)](./lib-ethers.populatableethersfluid.withdrawcollateral.md) |  | Adjust existing Trove by withdrawing some of its collateral. |
|  [withdrawGainsFromStabilityPool(overrides)](./lib-ethers.populatableethersfluid.withdrawgainsfromstabilitypool.md) |  | Withdraw [collateral gain](./lib-base.stabilitydeposit.collateralgain.md) and [FLO reward](./lib-base.stabilitydeposit.lqtyreward.md) from Stability Deposit. |
|  [withdrawGainsFromStaking(overrides)](./lib-ethers.populatableethersfluid.withdrawgainsfromstaking.md) |  | Withdraw [collateral gain](./lib-base.lqtystake.collateralgain.md) and [SAI gain](./lib-base.lqtystake.lusdgain.md) from FLO stake. |
|  [withdrawFLORewardFromLiquidityMining(overrides)](./lib-ethers.populatableethersfluid.withdrawlqtyrewardfromliquiditymining.md) |  | Withdraw FLO that has been earned by mining liquidity. |
|  [withdrawSAIFromStabilityPool(amount, overrides)](./lib-ethers.populatableethersfluid.withdrawlusdfromstabilitypool.md) |  | Withdraw SAI from Stability Deposit. |

