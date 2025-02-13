<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [PopulatableFluid](./lib-base.populatablefluid.md) &gt; [depositCollateral](./lib-base.populatablefluid.depositcollateral.md)

## PopulatableFluid.depositCollateral() method

Adjust existing Trove by depositing more collateral.

<b>Signature:</b>

```typescript
depositCollateral(amount: Decimalish): Promise<PopulatedFluidTransaction<P, SentFluidTransaction<S, FluidReceipt<R, TroveAdjustmentDetails>>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | The amount of collateral to add to the Trove's existing collateral. |

<b>Returns:</b>

Promise&lt;[PopulatedFluidTransaction](./lib-base.populatedfluidtransaction.md)<!-- -->&lt;P, [SentFluidTransaction](./lib-base.sentfluidtransaction.md)<!-- -->&lt;S, [FluidReceipt](./lib-base.fluidreceipt.md)<!-- -->&lt;R, [TroveAdjustmentDetails](./lib-base.troveadjustmentdetails.md)<!-- -->&gt;&gt;&gt;&gt;

## Remarks

Equivalent to:

```typescript
adjustTrove({ depositCollateral: amount })

```

