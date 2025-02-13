<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [PopulatableFluid](./lib-base.populatablefluid.md) &gt; [unstakeFLO](./lib-base.populatablefluid.unstakelqty.md)

## PopulatableFluid.unstakeFLO() method

Withdraw FLO from staking.

<b>Signature:</b>

```typescript
unstakeFLO(amount: Decimalish): Promise<PopulatedFluidTransaction<P, SentFluidTransaction<S, FluidReceipt<R, void>>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of FLO to withdraw. |

<b>Returns:</b>

Promise&lt;[PopulatedFluidTransaction](./lib-base.populatedfluidtransaction.md)<!-- -->&lt;P, [SentFluidTransaction](./lib-base.sentfluidtransaction.md)<!-- -->&lt;S, [FluidReceipt](./lib-base.fluidreceipt.md)<!-- -->&lt;R, void&gt;&gt;&gt;&gt;

## Remarks

As a side-effect, the transaction will also pay out the FLO stake's [collateral gain](./lib-base.lqtystake.collateralgain.md) and [SAI gain](./lib-base.lqtystake.lusdgain.md)<!-- -->.

