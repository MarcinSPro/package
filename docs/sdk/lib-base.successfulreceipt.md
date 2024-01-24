<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [SuccessfulReceipt](./lib-base.successfulreceipt.md)

## SuccessfulReceipt type

Indicates that the transaction has succeeded.

<b>Signature:</b>

```typescript
export declare type SuccessfulReceipt<R = unknown, D = unknown> = {
    status: "succeeded";
    rawReceipt: R;
    details: D;
};
```

## Remarks

The `rawReceipt` property is an implementation-specific transaction receipt object.

The `details` property may contain more information about the transaction. See the return types of [TransactableFluid](./lib-base.transactablefluid.md) functions for the exact contents of `details` for each type of Fluid transaction.

Returned by [SentFluidTransaction.getReceipt()](./lib-base.sentfluidtransaction.getreceipt.md) and [SentFluidTransaction.waitForReceipt()](./lib-base.sentfluidtransaction.waitforreceipt.md)<!-- -->.
