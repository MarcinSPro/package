<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [TransactableFluid](./lib-base.transactablefluid.md) &gt; [withdrawSAIFromStabilityPool](./lib-base.transactablefluid.withdrawlusdfromstabilitypool.md)

## TransactableFluid.withdrawSAIFromStabilityPool() method

Withdraw SAI from Stability Deposit.

<b>Signature:</b>

```typescript
withdrawSAIFromStabilityPool(amount: Decimalish): Promise<StabilityDepositChangeDetails>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of SAI to withdraw. |

<b>Returns:</b>

Promise&lt;[StabilityDepositChangeDetails](./lib-base.stabilitydepositchangedetails.md)<!-- -->&gt;

## Exceptions

Throws [TransactionFailedError](./lib-base.transactionfailederror.md) in case of transaction failure.

## Remarks

As a side-effect, the transaction will also pay out the Stability Deposit's [collateral gain](./lib-base.stabilitydeposit.collateralgain.md) and [FLO reward](./lib-base.stabilitydeposit.lqtyreward.md)<!-- -->.

