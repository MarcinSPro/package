<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [SendableSeisFluid](./lib-ethers.sendableethersfluid.md) &gt; [unstakeFLO](./lib-ethers.sendableethersfluid.unstakelqty.md)

## SendableSeisFluid.unstakeFLO() method

Withdraw FLO from staking.

<b>Signature:</b>

```typescript
unstakeFLO(amount: Decimalish, overrides?: SeisTransactionOverrides): Promise<SentSeisFluidTransaction<void>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of FLO to withdraw. |
|  overrides | [SeisTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[SentSeisFluidTransaction](./lib-ethers.sentethersfluidtransaction.md)<!-- -->&lt;void&gt;&gt;

## Remarks

As a side-effect, the transaction will also pay out the FLO stake's [collateral gain](./lib-base.lqtystake.collateralgain.md) and [SAI gain](./lib-base.lqtystake.lusdgain.md)<!-- -->.

