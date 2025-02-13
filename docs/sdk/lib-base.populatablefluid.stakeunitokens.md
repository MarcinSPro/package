<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [PopulatableFluid](./lib-base.populatablefluid.md) &gt; [stakeUniTokens](./lib-base.populatablefluid.stakeunitokens.md)

## PopulatableFluid.stakeUniTokens() method

Stake Uniswap SEI/SAI LP tokens to participate in liquidity mining and earn FLO.

<b>Signature:</b>

```typescript
stakeUniTokens(amount: Decimalish): Promise<PopulatedFluidTransaction<P, SentFluidTransaction<S, FluidReceipt<R, void>>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of LP tokens to add to new or existing stake. |

<b>Returns:</b>

Promise&lt;[PopulatedFluidTransaction](./lib-base.populatedfluidtransaction.md)<!-- -->&lt;P, [SentFluidTransaction](./lib-base.sentfluidtransaction.md)<!-- -->&lt;S, [FluidReceipt](./lib-base.fluidreceipt.md)<!-- -->&lt;R, void&gt;&gt;&gt;&gt;

