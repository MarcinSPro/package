<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [StabilityDepositChange](./lib-base.stabilitydepositchange.md)

## StabilityDepositChange type

Represents the change between two Stability Deposit states.

<b>Signature:</b>

```typescript
export declare type StabilityDepositChange<T> = {
    depositSAI: T;
    withdrawSAI?: undefined;
} | {
    depositSAI?: undefined;
    withdrawSAI: T;
    withdrawAllSAI: boolean;
};
```
