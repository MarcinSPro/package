<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [FailedReceipt](./lib-base.failedreceipt.md)

## FailedReceipt type

Indicates that the transaction has been mined, but it failed.

<b>Signature:</b>

```typescript
export declare type FailedReceipt<R = unknown> = {
    status: "failed";
    rawReceipt: R;
};
```

## Remarks

The `rawReceipt` property is an implementation-specific transaction receipt object.

Returned by [SentFluidTransaction.getReceipt()](./lib-base.sentfluidtransaction.getreceipt.md) and [SentFluidTransaction.waitForReceipt()](./lib-base.sentfluidtransaction.waitforreceipt.md)<!-- -->.

