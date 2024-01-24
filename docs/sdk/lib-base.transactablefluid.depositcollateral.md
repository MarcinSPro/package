<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [TransactableFluid](./lib-base.transactablefluid.md) &gt; [depositCollateral](./lib-base.transactablefluid.depositcollateral.md)

## TransactableFluid.depositCollateral() method

Adjust existing Trove by depositing more collateral.

<b>Signature:</b>

```typescript
depositCollateral(amount: Decimalish): Promise<TroveAdjustmentDetails>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | The amount of collateral to add to the Trove's existing collateral. |

<b>Returns:</b>

Promise&lt;[TroveAdjustmentDetails](./lib-base.troveadjustmentdetails.md)<!-- -->&gt;

## Exceptions

Throws [TransactionFailedError](./lib-base.transactionfailederror.md) in case of transaction failure.

## Remarks

Equivalent to:

```typescript
adjustTrove({ depositCollateral: amount })

```
