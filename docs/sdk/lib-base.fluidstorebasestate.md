<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [FluidStoreBaseState](./lib-base.fluidstorebasestate.md)

## FluidStoreBaseState interface

State variables read from the blockchain.

<b>Signature:</b>

```typescript
export interface FluidStoreBaseState 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [accountBalance](./lib-base.fluidstorebasestate.accountbalance.md) | [Decimal](./lib-base.decimal.md) | User's native currency balance (e.g. Sei). |
|  [collateralSurplusBalance](./lib-base.fluidstorebasestate.collateralsurplusbalance.md) | [Decimal](./lib-base.decimal.md) | Amount of leftover collateral available for withdrawal to the user. |
|  [frontend](./lib-base.fluidstorebasestate.frontend.md) | [FrontendStatus](./lib-base.frontendstatus.md) | Status of currently used frontend. |
|  [liquidityMiningFLOReward](./lib-base.fluidstorebasestate.liquiditymininglqtyreward.md) | [Decimal](./lib-base.decimal.md) | Amount of FLO the user has earned through mining liquidity. |
|  [liquidityMiningStake](./lib-base.fluidstorebasestate.liquidityminingstake.md) | [Decimal](./lib-base.decimal.md) | Amount of Uniswap SEI/SAI LP tokens the user has staked in liquidity mining. |
|  [lqtyBalance](./lib-base.fluidstorebasestate.lqtybalance.md) | [Decimal](./lib-base.decimal.md) | User's FLO token balance. |
|  [lqtyStake](./lib-base.fluidstorebasestate.lqtystake.md) | [FLOStake](./lib-base.lqtystake.md) | User's FLO stake. |
|  [lusdBalance](./lib-base.fluidstorebasestate.lusdbalance.md) | [Decimal](./lib-base.decimal.md) | User's SAI token balance. |
|  [lusdInStabilityPool](./lib-base.fluidstorebasestate.lusdinstabilitypool.md) | [Decimal](./lib-base.decimal.md) | Total amount of SAI currently deposited in the Stability Pool. |
|  [numberOfTroves](./lib-base.fluidstorebasestate.numberoftroves.md) | number | Number of Troves that are currently open. |
|  [ownFrontend](./lib-base.fluidstorebasestate.ownfrontend.md) | [FrontendStatus](./lib-base.frontendstatus.md) | Status of user's own frontend. |
|  [price](./lib-base.fluidstorebasestate.price.md) | [Decimal](./lib-base.decimal.md) | Current price of the native currency (e.g. Sei) in USD. |
|  [remainingLiquidityMiningFLOReward](./lib-base.fluidstorebasestate.remainingliquiditymininglqtyreward.md) | [Decimal](./lib-base.decimal.md) | Remaining FLO that will be collectively rewarded to liquidity miners. |
|  [remainingStabilityPoolFLOReward](./lib-base.fluidstorebasestate.remainingstabilitypoollqtyreward.md) | [Decimal](./lib-base.decimal.md) | Remaining FLO that will be collectively rewarded to stability depositors. |
|  [stabilityDeposit](./lib-base.fluidstorebasestate.stabilitydeposit.md) | [StabilityDeposit](./lib-base.stabilitydeposit.md) | User's stability deposit. |
|  [total](./lib-base.fluidstorebasestate.total.md) | [Trove](./lib-base.trove.md) | Total collateral and debt in the Fluid system. |
|  [totalRedistributed](./lib-base.fluidstorebasestate.totalredistributed.md) | [Trove](./lib-base.trove.md) | Total collateral and debt per stake that has been liquidated through redistribution. |
|  [totalStakedFLO](./lib-base.fluidstorebasestate.totalstakedlqty.md) | [Decimal](./lib-base.decimal.md) | Total amount of FLO currently staked. |
|  [totalStakedUniTokens](./lib-base.fluidstorebasestate.totalstakedunitokens.md) | [Decimal](./lib-base.decimal.md) | Total amount of Uniswap SEI/SAI LP tokens currently staked in liquidity mining. |
|  [troveBeforeRedistribution](./lib-base.fluidstorebasestate.trovebeforeredistribution.md) | [TroveWithPendingRedistribution](./lib-base.trovewithpendingredistribution.md) | User's Trove in its state after the last direct modification. |
|  [uniTokenAllowance](./lib-base.fluidstorebasestate.unitokenallowance.md) | [Decimal](./lib-base.decimal.md) | The liquidity mining contract's allowance of user's Uniswap SEI/SAI LP tokens. |
|  [uniTokenBalance](./lib-base.fluidstorebasestate.unitokenbalance.md) | [Decimal](./lib-base.decimal.md) | User's Uniswap SEI/SAI LP token balance. |

