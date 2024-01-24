<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluid/lib-base](./lib-base.md) &gt; [FluidStore](./lib-base.fluidstore.md) &gt; [state](./lib-base.fluidstore.state.md)

## FluidStore.state property

The current store state.

<b>Signature:</b>

```typescript
get state(): FluidStoreState<T>;
```

## Remarks

Should not be accessed before the store is loaded. Assign a function to [onLoaded](./lib-base.fluidstore.onloaded.md) to get a callback when this happens.

See [FluidStoreState](./lib-base.fluidstorestate.md) for the list of properties returned.
