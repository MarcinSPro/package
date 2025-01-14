<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [SendableSeisFluid](./lib-ethers.sendableethersfluid.md) &gt; [withdrawGainsFromStabilityPool](./lib-ethers.sendableethersfluid.withdrawgainsfromstabilitypool.md)

## SendableSeisFluid.withdrawGainsFromStabilityPool() method

Withdraw [collateral gain](./lib-base.stabilitydeposit.collateralgain.md) and [FLO reward](./lib-base.stabilitydeposit.lqtyreward.md) from Stability Deposit.

<b>Signature:</b>

```typescript
withdrawGainsFromStabilityPool(overrides?: SeisTransactionOverrides): Promise<SentSeisFluidTransaction<StabilityPoolGainsWithdrawalDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  overrides | [SeisTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[SentSeisFluidTransaction](./lib-ethers.sentethersfluidtransaction.md)<!-- -->&lt;[StabilityPoolGainsWithdrawalDetails](./lib-base.stabilitypoolgainswithdrawaldetails.md)<!-- -->&gt;&gt;

