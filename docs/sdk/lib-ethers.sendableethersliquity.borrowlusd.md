<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [SendableSeisFluid](./lib-ethers.sendableethersfluid.md) &gt; [borrowSAI](./lib-ethers.sendableethersfluid.borrowlusd.md)

## SendableSeisFluid.borrowSAI() method

Adjust existing Trove by borrowing more SAI.

<b>Signature:</b>

```typescript
borrowSAI(amount: Decimalish, maxBorrowingRate?: Decimalish, overrides?: SeisTransactionOverrides): Promise<SentSeisFluidTransaction<TroveAdjustmentDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | The amount of SAI to borrow. |
|  maxBorrowingRate | [Decimalish](./lib-base.decimalish.md) | Maximum acceptable [borrowing rate](./lib-base.fees.borrowingrate.md)<!-- -->. |
|  overrides | [SeisTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[SentSeisFluidTransaction](./lib-ethers.sentethersfluidtransaction.md)<!-- -->&lt;[TroveAdjustmentDetails](./lib-base.troveadjustmentdetails.md)<!-- -->&gt;&gt;

## Remarks

Equivalent to:

```typescript
adjustTrove({ borrowSAI: amount }, maxBorrowingRate)

```

