<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [PopulatableFluid](./lib-base.populatablefluid.md) &gt; [liquidateUpTo](./lib-base.populatablefluid.liquidateupto.md)

## PopulatableFluid.liquidateUpTo() method

Liquidate the least collateralized Troves up to a maximum number.

<b>Signature:</b>

```typescript
liquidateUpTo(maximumNumberOfTrovesToLiquidate: number): Promise<PopulatedFluidTransaction<P, SentFluidTransaction<S, FluidReceipt<R, LiquidationDetails>>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maximumNumberOfTrovesToLiquidate | number | Stop after liquidating this many Troves. |

<b>Returns:</b>

Promise&lt;[PopulatedFluidTransaction](./lib-base.populatedfluidtransaction.md)<!-- -->&lt;P, [SentFluidTransaction](./lib-base.sentfluidtransaction.md)<!-- -->&lt;S, [FluidReceipt](./lib-base.fluidreceipt.md)<!-- -->&lt;R, [LiquidationDetails](./lib-base.liquidationdetails.md)<!-- -->&gt;&gt;&gt;&gt;
