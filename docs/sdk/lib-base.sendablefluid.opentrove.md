<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [SendableFluid](./lib-base.sendablefluid.md) &gt; [openTrove](./lib-base.sendablefluid.opentrove.md)

## SendableFluid.openTrove() method

Open a new Trove by depositing collateral and borrowing LUSD.

<b>Signature:</b>

```typescript
openTrove(params: TroveCreationParams<Decimalish>, maxBorrowingRate?: Decimalish): Promise<SentFluidTransaction<S, FluidReceipt<R, TroveCreationDetails>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  params | [TroveCreationParams](./lib-base.trovecreationparams.md)<!-- -->&lt;[Decimalish](./lib-base.decimalish.md)<!-- -->&gt; | How much to deposit and borrow. |
|  maxBorrowingRate | [Decimalish](./lib-base.decimalish.md) | Maximum acceptable [borrowing rate](./lib-base.fees.borrowingrate.md)<!-- -->. |

<b>Returns:</b>

Promise&lt;[SentFluidTransaction](./lib-base.sentfluidtransaction.md)<!-- -->&lt;S, [FluidReceipt](./lib-base.fluidreceipt.md)<!-- -->&lt;R, [TroveCreationDetails](./lib-base.trovecreationdetails.md)<!-- -->&gt;&gt;&gt;

## Remarks

If `maxBorrowingRate` is omitted, the current borrowing rate plus 0.5% is used as maximum acceptable rate.
