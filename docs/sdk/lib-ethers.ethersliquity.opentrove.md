<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [SeisFluid](./lib-ethers.ethersfluid.md) &gt; [openTrove](./lib-ethers.ethersfluid.opentrove.md)

## SeisFluid.openTrove() method

Open a new Trove by depositing collateral and borrowing SAI.

<b>Signature:</b>

```typescript
openTrove(params: TroveCreationParams<Decimalish>, maxBorrowingRateOrOptionalParams?: Decimalish | BorrowingOperationOptionalParams, overrides?: SeisTransactionOverrides): Promise<TroveCreationDetails>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  params | [TroveCreationParams](./lib-base.trovecreationparams.md)<!-- -->&lt;[Decimalish](./lib-base.decimalish.md)<!-- -->&gt; | How much to deposit and borrow. |
|  maxBorrowingRateOrOptionalParams | [Decimalish](./lib-base.decimalish.md) \| [BorrowingOperationOptionalParams](./lib-ethers.borrowingoperationoptionalparams.md) |  |
|  overrides | [SeisTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[TroveCreationDetails](./lib-base.trovecreationdetails.md)<!-- -->&gt;

## Exceptions

Throws [SeisTransactionFailedError](./lib-ethers.etherstransactionfailederror.md) in case of transaction failure. Throws [SeisTransactionCancelledError](./lib-ethers.etherstransactioncancellederror.md) if the transaction is cancelled or replaced.

## Remarks

If `maxBorrowingRate` is omitted, the current borrowing rate plus 0.5% is used as maximum acceptable rate.

