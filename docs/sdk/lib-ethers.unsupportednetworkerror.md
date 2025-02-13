<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-ethers](./lib-ethers.md) &gt; [UnsupportedNetworkError](./lib-ethers.unsupportednetworkerror.md)

## UnsupportedNetworkError class

Thrown when trying to connect to a network where Fluid is not deployed.

<b>Signature:</b>

```typescript
export declare class UnsupportedNetworkError extends Error 
```
<b>Extends:</b> Error

## Remarks

Thrown by [ReadableSeisFluid.connect()](./lib-ethers.readableethersfluid.connect_1.md) and [SeisFluid.connect()](./lib-ethers.ethersfluid.connect_1.md)<!-- -->.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `UnsupportedNetworkError` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [chainId](./lib-ethers.unsupportednetworkerror.chainid.md) |  | number | Chain ID of the unsupported network. |

