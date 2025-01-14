<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [ReadableSeisFluid](./lib-ethers.readableethersfluid.md) &gt; [getFrontendStatus](./lib-ethers.readableethersfluid.getfrontendstatus.md)

## ReadableSeisFluid.getFrontendStatus() method

Check whether an address is registered as a Fluid frontend, and what its kickback rate is.

<b>Signature:</b>

```typescript
getFrontendStatus(address?: string, overrides?: SeisCallOverrides): Promise<FrontendStatus>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  address | string | Address to check. |
|  overrides | [SeisCallOverrides](./lib-ethers.etherscalloverrides.md) |  |

<b>Returns:</b>

Promise&lt;[FrontendStatus](./lib-base.frontendstatus.md)<!-- -->&gt;

