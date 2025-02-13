<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [TransactableFluid](./lib-base.transactablefluid.md) &gt; [stakeUniTokens](./lib-base.transactablefluid.stakeunitokens.md)

## TransactableFluid.stakeUniTokens() method

Stake Uniswap SEI/SAI LP tokens to participate in liquidity mining and earn FLO.

<b>Signature:</b>

```typescript
stakeUniTokens(amount: Decimalish): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of LP tokens to add to new or existing stake. |

<b>Returns:</b>

Promise&lt;void&gt;

## Exceptions

Throws [TransactionFailedError](./lib-base.transactionfailederror.md) in case of transaction failure.

