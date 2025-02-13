<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [SendableSeisFluid](./lib-ethers.sendableethersfluid.md) &gt; [withdrawCollateral](./lib-ethers.sendableethersfluid.withdrawcollateral.md)

## SendableSeisFluid.withdrawCollateral() method

Adjust existing Trove by withdrawing some of its collateral.

<b>Signature:</b>

```typescript
withdrawCollateral(amount: Decimalish, overrides?: SeisTransactionOverrides): Promise<SentSeisFluidTransaction<TroveAdjustmentDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | The amount of collateral to withdraw from the Trove. |
|  overrides | [SeisTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[SentSeisFluidTransaction](./lib-ethers.sentethersfluidtransaction.md)<!-- -->&lt;[TroveAdjustmentDetails](./lib-base.troveadjustmentdetails.md)<!-- -->&gt;&gt;

## Remarks

Equivalent to:

```typescript
adjustTrove({ withdrawCollateral: amount })

```

