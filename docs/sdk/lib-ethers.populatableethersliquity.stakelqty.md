<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [PopulatableSeisFluid](./lib-ethers.populatableethersfluid.md) &gt; [stakeFLO](./lib-ethers.populatableethersfluid.stakelqty.md)

## PopulatableSeisFluid.stakeFLO() method

Stake FLO to start earning fee revenue or increase existing stake.

<b>Signature:</b>

```typescript
stakeFLO(amount: Decimalish, overrides?: SeisTransactionOverrides): Promise<PopulatedSeisFluidTransaction<void>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of FLO to add to new or existing stake. |
|  overrides | [SeisTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[PopulatedSeisFluidTransaction](./lib-ethers.populatedethersfluidtransaction.md)<!-- -->&lt;void&gt;&gt;

## Remarks

As a side-effect, the transaction will also pay out an existing FLO stake's [collateral gain](./lib-base.lqtystake.collateralgain.md) and [SAI gain](./lib-base.lqtystake.lusdgain.md)<!-- -->.

