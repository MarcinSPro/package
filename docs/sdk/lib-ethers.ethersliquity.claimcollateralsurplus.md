<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [SeisFluid](./lib-ethers.ethersfluid.md) &gt; [claimCollateralSurplus](./lib-ethers.ethersfluid.claimcollateralsurplus.md)

## SeisFluid.claimCollateralSurplus() method

Claim leftover collateral after a liquidation or redemption.

<b>Signature:</b>

```typescript
claimCollateralSurplus(overrides?: SeisTransactionOverrides): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  overrides | [SeisTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;void&gt;

## Exceptions

Throws [SeisTransactionFailedError](./lib-ethers.etherstransactionfailederror.md) in case of transaction failure. Throws [SeisTransactionCancelledError](./lib-ethers.etherstransactioncancellederror.md) if the transaction is cancelled or replaced.

## Remarks

Use [getCollateralSurplusBalance()](./lib-base.readablefluid.getcollateralsurplusbalance.md) to check the amount of collateral available for withdrawal.

