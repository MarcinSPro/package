<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [PopulatableFluid](./lib-base.populatablefluid.md) &gt; [stakeFLO](./lib-base.populatablefluid.stakelqty.md)

## PopulatableFluid.stakeFLO() method

Stake FLO to start earning fee revenue or increase existing stake.

<b>Signature:</b>

```typescript
stakeFLO(amount: Decimalish): Promise<PopulatedFluidTransaction<P, SentFluidTransaction<S, FluidReceipt<R, void>>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of FLO to add to new or existing stake. |

<b>Returns:</b>

Promise&lt;[PopulatedFluidTransaction](./lib-base.populatedfluidtransaction.md)<!-- -->&lt;P, [SentFluidTransaction](./lib-base.sentfluidtransaction.md)<!-- -->&lt;S, [FluidReceipt](./lib-base.fluidreceipt.md)<!-- -->&lt;R, void&gt;&gt;&gt;&gt;

## Remarks

As a side-effect, the transaction will also pay out an existing FLO stake's [collateral gain](./lib-base.lqtystake.collateralgain.md) and [SAI gain](./lib-base.lqtystake.lusdgain.md)<!-- -->.

