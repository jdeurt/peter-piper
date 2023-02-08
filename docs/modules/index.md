[peter-piper](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Interfaces

- [CallbackAdapterContext](../interfaces/index.CallbackAdapterContext.md)
- [DeeplyEqualsOptions](../interfaces/index.DeeplyEqualsOptions.md)

### Type Aliases

- [CleanupFn](index.md#cleanupfn)
- [FactoryFn](index.md#factoryfn)

### Constants

- [\_\_](index.md#__)

### Other helpers

- [assertType](index.md#asserttype)
- [isEmpty](index.md#isempty)
- [useSideEffect](index.md#usesideeffect)
- [useSideEffectSync](index.md#usesideeffectsync)

### Adapters

- [callbackAdapter](index.md#callbackadapter)
- [customAdapter](index.md#customadapter)
- [streamAdapter](index.md#streamadapter)
- [webSocketAdapter](index.md#websocketadapter)
- [withCallbackAdapter](index.md#withcallbackadapter)
- [withCustomAdapter](index.md#withcustomadapter)
- [withStreamAdapter](index.md#withstreamadapter)
- [withWebSocketAdapter](index.md#withwebsocketadapter)

### Lazy helpers

- [concat](index.md#concat)
- [concatSync](index.md#concatsync)
- [consumeSync](index.md#consumesync)
- [everySync](index.md#everysync)
- [filter](index.md#filter)
- [filterSync](index.md#filtersync)
- [findSync](index.md#findsync)
- [first](index.md#first)
- [firstSync](index.md#firstsync)
- [isEmptySync](index.md#isemptysync)
- [map](index.md#map)
- [mapSync](index.md#mapsync)
- [reduceSync](index.md#reducesync)
- [scan](index.md#scan)
- [scanSync](index.md#scansync)
- [slice](index.md#slice)
- [sliceSync](index.md#slicesync)
- [someSync](index.md#somesync)
- [take](index.md#take)
- [takeSync](index.md#takesync)
- [throttle](index.md#throttle)
- [toArraySync](index.md#toarraysync)
- [wrap](index.md#wrap)

### Greedy helpers

- [consume](index.md#consume)
- [deeplyEquals](index.md#deeplyequals)
- [equals](index.md#equals)
- [every](index.md#every)
- [find](index.md#find)
- [fork](index.md#fork)
- [isFalsy](index.md#isfalsy)
- [isOneOf](index.md#isoneof)
- [isTruthy](index.md#istruthy)
- [match](index.md#match)
- [pipe](index.md#pipe)
- [reduce](index.md#reduce)
- [some](index.md#some)
- [toArray](index.md#toarray)

### Iterable factories

- [randomFloats](index.md#randomfloats)
- [randomInts](index.md#randomints)
- [range](index.md#range)

### Functions

- [using](index.md#using)
- [usingIterable](index.md#usingiterable)
- [wrapSync](index.md#wrapsync)

## Type Aliases

### CleanupFn

Ƭ **CleanupFn**<`T`, `U`\>: (`context`: [`CallbackAdapterContext`](../interfaces/index.CallbackAdapterContext.md)<`U`\>, `target`: `T`) => `unknown`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | extends `unknown`[] |

#### Type declaration

▸ (`context`, `target`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`CallbackAdapterContext`](../interfaces/index.CallbackAdapterContext.md)<`U`\> |
| `target` | `T` |

##### Returns

`unknown`

#### Defined in

[src/helpers/adapters/callback-adapter.ts:23](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/callback-adapter.ts#L23)

___

### FactoryFn

Ƭ **FactoryFn**<`T`, `U`\>: (`context`: [`CallbackAdapterContext`](../interfaces/index.CallbackAdapterContext.md)<`U`\>, `target`: `T`) => `unknown`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | extends `unknown`[] |

#### Type declaration

▸ (`context`, `target`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`CallbackAdapterContext`](../interfaces/index.CallbackAdapterContext.md)<`U`\> |
| `target` | `T` |

##### Returns

`unknown`

#### Defined in

[src/helpers/adapters/callback-adapter.ts:18](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/callback-adapter.ts#L18)

## Constants

### \_\_

• `Const` **\_\_**: typeof [`__`](index.md#__)

A placeholder symbol.

#### Defined in

[src/constants/placeholder.ts:5](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/constants/placeholder.ts#L5)

## Other helpers

### assertType

▸ **assertType**<`T`\>(): (`input`: `unknown`) => `T`

Forcefully asserts the type of the last output to be `T` and returns that original value.

**`Example`**

```ts
using(unknownValue).pipe(
    assertType<number[]>(),
    reduce((acc, x) => acc + x)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`input`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

##### Returns

`T`

#### Defined in

[src/helpers/misc/assert-type.ts:11](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/assert-type.ts#L11)

___

### isEmpty

▸ **isEmpty**(): (`input`: [`AnyIterable`](types.md#anyiterable)<`unknown`\>) => `Promise`<`boolean`\>

Returns `Promise<true>` if some input iterable is empty (i.e. can't produce any values). Returns `Promise<false>` otherwise.

**`Example`**

```ts
using([]).pipe(
    isEmpty()
)
```

#### Returns

`fn`

▸ (`input`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`unknown`\> |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/helpers/iterable/is-empty.ts:12](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/is-empty.ts#L12)

___

### useSideEffect

▸ **useSideEffect**<`T`\>(`sideEffect`): (`input`: `T`) => `Promise`<`T`\>

Executes the provided side-effect function and returns an unmodified version of some input value.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    map(useSideEffect(console.log))
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sideEffect` | (`value`: `T`) => `unknown` |

#### Returns

`fn`

▸ (`input`): `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

`Promise`<`T`\>

#### Defined in

[src/helpers/misc/use-side-effect.ts:10](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/use-side-effect.ts#L10)

___

### useSideEffectSync

▸ **useSideEffectSync**<`T`\>(`sideEffect`): (`input`: `T`) => `T`

A sync variant of [useSideEffect](index.md#usesideeffect).

**`Remarks`**

Available as `useSideEffect` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sideEffect` | (`value`: `T`) => `unknown` |

#### Returns

`fn`

▸ (`input`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

`T`

#### Defined in

[src/helpers/misc/use-side-effect.ts:25](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/use-side-effect.ts#L25)

## Adapters

### callbackAdapter

▸ **callbackAdapter**<`U`\>(`factory`, `cleanup?`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

A non-currying variant of [withCallbackAdapter](index.md#withcallbackadapter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`FactoryFn`](index.md#factoryfn)<`undefined`, `U`\> |
| `cleanup?` | [`CleanupFn`](index.md#cleanupfn)<`undefined`, `U`\> |

#### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

#### Defined in

[src/helpers/adapters/callback-adapter.ts:98](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/callback-adapter.ts#L98)

___

### customAdapter

▸ **customAdapter**<`U`\>(`adapter`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

A non-currying variant of [withCustomAdapter](index.md#withcustomadapter).

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | [`Adapter`](types.md#adapter)<`undefined`, `U`\> |

#### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

#### Defined in

[src/helpers/adapters/custom-adapter.ts:17](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/custom-adapter.ts#L17)

___

### streamAdapter

▸ **streamAdapter**<`T`\>(`stream`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`T`\>

A non-currying variant of [withStreamAdapter](index.md#withstreamadapter).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `ReadableStream`<`T`\> |

#### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`T`\>

#### Defined in

[src/helpers/adapters/stream-adapter.ts:26](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/stream-adapter.ts#L26)

___

### webSocketAdapter

▸ **webSocketAdapter**<`T`\>(`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<[event: MessageEvent<T\>]\>

A non-currying variant of [withWebSocketAdapter](index.md#withwebsocketadapter).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `WebSocket` |

#### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<[event: MessageEvent<T\>]\>

#### Defined in

[src/helpers/adapters/websocket-adapter.ts:30](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/websocket-adapter.ts#L30)

___

### withCallbackAdapter

▸ **withCallbackAdapter**<`T`, `U`\>(`factory`, `cleanup?`): (`input`: `T`) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

Creates an async iterable that generates values passed via calling `pass` in the [CallbackAdapterContext](../interfaces/index.CallbackAdapterContext.md).

**`Example`**

```ts
withCallbackAdapter(
    (context, target) => target.on("someEvent", context.pass),
    (context, target) => target.removeListener("someEvent", context.pass)
)(someTarget);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | extends `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`FactoryFn`](index.md#factoryfn)<`T`, `U`\> |
| `cleanup?` | [`CleanupFn`](index.md#cleanupfn)<`T`, `U`\> |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

#### Defined in

[src/helpers/adapters/callback-adapter.ts:38](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/callback-adapter.ts#L38)

___

### withCustomAdapter

▸ **withCustomAdapter**<`T`, `U`\>(`adapter`): (`input`: `T`) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

Maps some input value to an async iterable in accordance with the provided adapter function.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | [`Adapter`](types.md#adapter)<`T`, `U`\> |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`U`\>

#### Defined in

[src/helpers/adapters/custom-adapter.ts:9](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/custom-adapter.ts#L9)

___

### withStreamAdapter

▸ **withStreamAdapter**<`T`\>(): (`input`: `ReadableStream`<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`T`\>

Maps some input stream to an equivalent async iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `ReadableStream`<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`T`\>

#### Defined in

[src/helpers/adapters/stream-adapter.ts:8](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/stream-adapter.ts#L8)

___

### withWebSocketAdapter

▸ **withWebSocketAdapter**<`T`\>(): (`input`: `WebSocket`) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<[event: MessageEvent<T\>]\>

Creates and async iteratable that yields values from messages received from a WebSocket.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<[event: MessageEvent<T\>]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `WebSocket` |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<[event: MessageEvent<T\>]\>

#### Defined in

[src/helpers/adapters/websocket-adapter.ts:10](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/websocket-adapter.ts#L10)

## Lazy helpers

### concat

▸ **concat**<`T`\>(`...iterables`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

Creates an iterable by concatenating an arbitrary amount of iterables to some base iterable.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    concat([4, 5, 6])
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...iterables` | [`AnyIterable`](types.md#anyiterable)<`T`\>[] |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

[src/helpers/iterable/concat.ts:12](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/concat.ts#L12)

___

### concatSync

▸ **concatSync**<`T`\>(`...iterables`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

A sync variant of [concat](index.md#concat).

**`Remarks`**

Available as `concat` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...iterables` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\>[] |

#### Returns

`fn`

▸ (`input`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/helpers/iterable/concat.ts:28](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/concat.ts#L28)

___

### consumeSync

▸ **consumeSync**<`T`, `U`\>(`mapFn?`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => `U`[]

A sync variant of [consume](index.md#consume).

**`Remarks`**

Available as `consume` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapFn?` | [`MapFn`](types.md#mapfn)<`T`, `U`\> |

#### Returns

`fn`

▸ (`input`): `U`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

`U`[]

#### Defined in

[src/helpers/iterable/consume.ts:43](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/consume.ts#L43)

___

### everySync

▸ **everySync**<`T`\>(`predicate`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => `boolean`

A sync variant of [every](index.md#every).

**`Remarks`**

Available as `every` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](types.md#predicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

`boolean`

#### Defined in

[src/helpers/iterable/every.ts:36](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/every.ts#L36)

___

### filter

▸ **filter**<`T`\>(`predicate`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

Creates a new iterable containing all values of some input iterable that satisfy the provided predicate.

**`Example`**

```ts
using([1, 0, 0, 1, 0]).pipe(
    filter((x) => x === 1)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`AsyncPredicate`](types.md#asyncpredicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

[src/helpers/iterable/filter.ts:17](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/filter.ts#L17)

___

### filterSync

▸ **filterSync**<`T`\>(`predicate`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

A sync variant of [filter](index.md#filter).

**`Remarks`**

Available as `filter` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](types.md#predicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/helpers/iterable/filter.ts:37](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/filter.ts#L37)

___

### findSync

▸ **findSync**<`T`\>(`predicate`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => `undefined` \| `T`

A sync variant of [find](index.md#find).

**`Remarks`**

Available as `find` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](types.md#predicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

`undefined` \| `T`

#### Defined in

[src/helpers/iterable/find.ts:37](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/find.ts#L37)

___

### first

▸ **first**<`T`\>(`predicate?`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

Creates an iterable containing only the first value of some input iterable or, if a predicate is provided, the first value to satisfy that predicate.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    first((x) => x === 2)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | [`AsyncPredicate`](types.md#asyncpredicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

[src/helpers/iterable/first.ts:17](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/first.ts#L17)

___

### firstSync

▸ **firstSync**<`T`\>(`predicate?`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

A sync variant of [first](index.md#first).

**`Remarks`**

Available as `first` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | [`Predicate`](types.md#predicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/helpers/iterable/first.ts:43](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/first.ts#L43)

___

### isEmptySync

▸ **isEmptySync**(): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`unknown`\>) => `boolean`

A sync variant of [isEmpty](index.md#isempty).

**`Remarks`**

Available as `isEmpty` when imported from `peter-piper/sync`.

#### Returns

`fn`

▸ (`input`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`unknown`\> |

##### Returns

`boolean`

#### Defined in

[src/helpers/iterable/is-empty.ts:28](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/is-empty.ts#L28)

___

### map

▸ **map**<`T`, `U`\>(`mapFn`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

Creates a new iterable which's values are the result of mapping some input iterable using the provided callback function.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    map((x) => x * 2)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapFn` | [`MapFn`](types.md#mapfn)<`T`, `U`\> |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

#### Defined in

[src/helpers/iterable/map.ts:12](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/map.ts#L12)

___

### mapSync

▸ **mapSync**<`T`, `U`\>(`mapFn`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`U`\>

A sync variant of [map](index.md#map).

**`Remarks`**

Available as `map` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapFn` | [`MapFn`](types.md#mapfn)<`T`, `U`\> |

#### Returns

`fn`

▸ (`input`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`U`\>

#### Defined in

[src/helpers/iterable/map.ts:30](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/map.ts#L30)

___

### reduceSync

▸ **reduceSync**<`T`, `U`\>(`reducer`, `initialValue?`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => `U`

A sync variant of [reduce](index.md#reduce).

**`Remarks`**

Available as `reduce` when imported from `peter-piper/sync`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](types.md#reducer)<`T`, `U`\> |
| `initialValue?` | `U` |

#### Returns

`fn`

▸ (`input`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

`U`

#### Defined in

[src/helpers/iterable/reduce.ts:57](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/reduce.ts#L57)

___

### scan

▸ **scan**<`T`, `U`\>(`reducer`, `initialValue?`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

Similar to [reduce](index.md#reduce) except returns an iterable with values corresponding to the result of each reduction step.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    scan((acc, x) => acc + x)
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](types.md#reducer)<`T`, [`MaybePromise`](types.md#maybepromise)<`U`\>\> |
| `initialValue?` | `U` |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

#### Defined in

[src/helpers/iterable/scan.ts:18](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/scan.ts#L18)

___

### scanSync

▸ **scanSync**<`T`, `U`\>(`reducer`, `initialValue?`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`U`\>

A sync variant of [scan](index.md#scan).

**`Remarks`**

Available as `scan` when imported from `peter-piper/sync`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](types.md#reducer)<`T`, `U`\> |
| `initialValue?` | `U` |

#### Returns

`fn`

▸ (`input`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`U`\>

#### Defined in

[src/helpers/iterable/scan.ts:54](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/scan.ts#L54)

___

### slice

▸ **slice**<`T`\>(`startIndex`, `endIndex?`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

Creates a new iterable by slicing some input iterable from the provided start index (inclusive) to the provided end index (exclusive).
If no end index is provided, `Number.POSITIVE_INFINITY` is used instead.

**`Example`**

```ts
using([1, 2, 3, 4]).pipe(
    slice(1, 3)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startIndex` | `number` | `undefined` |
| `endIndex` | `number` | `Number.POSITIVE_INFINITY` |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

[src/helpers/iterable/slice.ts:13](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/slice.ts#L13)

___

### sliceSync

▸ **sliceSync**<`T`\>(`startIndex`, `endIndex?`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

A sync variant of [slice](index.md#slice).

**`Remarks`**

Available as `slice` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startIndex` | `number` | `undefined` |
| `endIndex` | `number` | `Number.POSITIVE_INFINITY` |

#### Returns

`fn`

▸ (`input`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/helpers/iterable/slice.ts:42](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/slice.ts#L42)

___

### someSync

▸ **someSync**<`T`\>(`predicate`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => `boolean`

A sync variant of [some](index.md#some).

**`Remarks`**

Available as `some` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](types.md#predicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

`boolean`

#### Defined in

[src/helpers/iterable/some.ts:36](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/some.ts#L36)

___

### take

▸ **take**<`T`\>(`n`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

Creates a new iterable containing only the first `x` values of some input iterable.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    take(2)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

[src/helpers/iterable/take.ts:12](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/take.ts#L12)

___

### takeSync

▸ **takeSync**<`T`\>(`n`): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

A sync variant of [take](index.md#take).

**`Remarks`**

Available as `take` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`input`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/helpers/iterable/take.ts:36](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/take.ts#L36)

___

### throttle

▸ **throttle**<`T`\>(`ms`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

Creates a new iterable consiting of only values of some input iterable yielded `ms` milliseconds apart.

**`Example`**

```ts
using(someAsyncGenerator()).pipe(
    throttle(2000) // 2 seconds
);
```

**`Remarks`**

Due to the nature of this helper, it does not have a sync variant.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

[src/helpers/iterable/throttle.ts:15](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/throttle.ts#L15)

___

### toArraySync

▸ **toArraySync**<`T`\>(): (`input`: [`AnySyncIterable`](types.md#anysynciterable)<`T`\>) => `T`[]

A sync variant of [toArray](index.md#toarray).

**`Remarks`**

Available as `toArray` when imported from `peter-piper/sync`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`input`): `T`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnySyncIterable`](types.md#anysynciterable)<`T`\> |

##### Returns

`T`[]

#### Defined in

[src/helpers/iterable/to-array.ts:30](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/to-array.ts#L30)

___

### wrap

▸ **wrap**<`T`\>(): (`input`: `T`) => [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

Wraps some input value in an async iterable.

**`Example`**

```ts
using(2).pipe(
    wrap(),
    // Now we can use iterable helpers
    map(...)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`input`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

[src/helpers/misc/wrap.ts:14](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/wrap.ts#L14)

## Greedy helpers

### consume

▸ **consume**<`T`, `U`\>(`mapFn?`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => `Promise`<`U`[]\>

Fully consumes some input iterable while passing each value of the iterable to the provided callback function. The values returned from calling the callback function are returned as an array.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    consume((x) => x);
);
```

**`Remarks`**

`consume` behaves almost identically to `map`, the main difference being that `consume` will greedily iterate through the input iterable.
Because of this, you must be careful not to pass an inifinite iterable as input unless you want `consume` to run forever.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapFn?` | [`MapFn`](types.md#mapfn)<`T`, [`MaybePromise`](types.md#maybepromise)<`U`\>\> |

#### Returns

`fn`

▸ (`input`): `Promise`<`U`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

`Promise`<`U`[]\>

#### Defined in

[src/helpers/iterable/consume.ts:21](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/consume.ts#L21)

___

### deeplyEquals

▸ **deeplyEquals**(`value`, `options?`): (`input`: `unknown`) => `boolean`

Returns `true` if some input value is deeply (recursively) equal to the provided value. Returns `false` otherwise.

**`Example`**

```ts
using(someObject).pipe(
    deeplyEquals(someOtherObject)
);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `options?` | `Partial`<[`DeeplyEqualsOptions`](../interfaces/index.DeeplyEqualsOptions.md)\> |

#### Returns

`fn`

▸ (`input`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

##### Returns

`boolean`

#### Defined in

[src/helpers/misc/deeply-equals.ts:18](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/deeply-equals.ts#L18)

___

### equals

▸ **equals**(`value`): (`input`: `unknown`) => `boolean`

Returns `true` if some input value strictly equals the provided value. Returns `false` otherwise.

**`Example`**

```ts
using(1).pipe(
    equals(1)
);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`fn`

▸ (`input`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

##### Returns

`boolean`

#### Defined in

[src/helpers/misc/equals.ts:9](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/equals.ts#L9)

___

### every

▸ **every**<`T`\>(`predicate`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => `Promise`<`boolean`\>

Tests whether all values of some input iterable satisfy the provided predicate.

**`Example`**

```ts
using([2, 4, 6]).pipe(
    every((x) => x % 2 === 0)
)
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`AsyncPredicate`](types.md#asyncpredicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/helpers/iterable/every.ts:17](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/every.ts#L17)

___

### find

▸ **find**<`T`\>(`predicate`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => `Promise`<`undefined` \| `T`\>

Retrieves the first value of some input iterable that satisfies the provided predicate.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    find((x) => x === 2)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`AsyncPredicate`](types.md#asyncpredicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): `Promise`<`undefined` \| `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

`Promise`<`undefined` \| `T`\>

#### Defined in

[src/helpers/iterable/find.ts:17](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/find.ts#L17)

___

### fork

▸ **fork**<`T`\>(`...paths`): (`input`: [`ForkPathInputValueType`](types.md#forkpathinputvaluetype)<`T`\>) => [`ForkPathReturnValueType`](types.md#forkpathreturnvaluetype)<`T`\>

Passes some input value to an arbitrary amount of execution paths and returns a tuple containing the result of each execution path in order.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    fork(
        map((x) => x + 1),
        map((x) => x - 1)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ForkPath`](types.md#forkpath)<`never`, `unknown`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `T` |

#### Returns

`fn`

▸ (`input`): [`ForkPathReturnValueType`](types.md#forkpathreturnvaluetype)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ForkPathInputValueType`](types.md#forkpathinputvaluetype)<`T`\> |

##### Returns

[`ForkPathReturnValueType`](types.md#forkpathreturnvaluetype)<`T`\>

#### Defined in

[src/helpers/routing/fork.ts:19](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/routing/fork.ts#L19)

___

### isFalsy

▸ **isFalsy**(): (`input`: `unknown`) => `boolean`

Returns `true` is some input value is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). Returns `false` otherwise.

**`Example`**

```ts
using(0).pipe(
    isFalsy()
);
```

#### Returns

`fn`

▸ (`input`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

##### Returns

`boolean`

#### Defined in

[src/helpers/misc/is-falsy.ts:9](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/is-falsy.ts#L9)

___

### isOneOf

▸ **isOneOf**<`T`\>(`values`): (`input`: `T`) => `boolean`

Returns `true` if some input value is present in the provided array of values. Returns `false` otherwise.

**`Example`**

```ts
using(2).pipe(
    isOneOf([1, 2, 3])
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T`[] |

#### Returns

`fn`

▸ (`input`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

`boolean`

#### Defined in

[src/helpers/misc/is-one-of.ts:10](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/is-one-of.ts#L10)

___

### isTruthy

▸ **isTruthy**(): (`input`: `unknown`) => `boolean`

Returns `true` is some input value is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). Returns `false` otherwise.

**`Example`**

```ts
using(1).pipe(
    isTruthy()
);
```

#### Returns

`fn`

▸ (`input`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

##### Returns

`boolean`

#### Defined in

[src/helpers/misc/is-truthy.ts:9](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/is-truthy.ts#L9)

___

### match

▸ **match**<`T`\>(`...paths`): (`input`: [`MatchPathInputValueType`](types.md#matchpathinputvaluetype)<`T`\>) => `Promise`<`T` extends [`MatchPaths`](types.md#matchpaths) ? `undefined` \| [`MatchPathReturnValueType`](types.md#matchpathreturnvaluetype)<`T`\> : [`MatchPathReturnValueType`](types.md#matchpathreturnvaluetype)<`T`\>\>

Finds the first path pair where some input value satisfies that pair's predicate and returns the result of passing said input value to that pair's callback function. If a placeholder (`__`) is used in place of a predicate in the last path, that path will act as a fallback path.

**`Example`**

```ts
using(1).pipe(
    match(
        [equals(0), (x) => x + 1],
        [equals(1), (x) => x - 1]
    )
);

// with placeholder
using(1).pipe(
    match(
        [equals(0), (x) => x + 1],
        [__, (x) => x - 1]
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MatchPathsWithFallback`](types.md#matchpathswithfallback) \| [`MatchPaths`](types.md#matchpaths) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `T` |

#### Returns

`fn`

▸ (`input`): `Promise`<`T` extends [`MatchPaths`](types.md#matchpaths) ? `undefined` \| [`MatchPathReturnValueType`](types.md#matchpathreturnvaluetype)<`T`\> : [`MatchPathReturnValueType`](types.md#matchpathreturnvaluetype)<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`MatchPathInputValueType`](types.md#matchpathinputvaluetype)<`T`\> |

##### Returns

`Promise`<`T` extends [`MatchPaths`](types.md#matchpaths) ? `undefined` \| [`MatchPathReturnValueType`](types.md#matchpathreturnvaluetype)<`T`\> : [`MatchPathReturnValueType`](types.md#matchpathreturnvaluetype)<`T`\>\>

#### Defined in

[src/helpers/routing/match.ts:29](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/routing/match.ts#L29)

___

### pipe

▸ **pipe**<`A`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`A`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`A`\>

#### Defined in

[src/types/generated/pipe.ts:7](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L7)

▸ **pipe**<`A`, `B`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`B`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`B`\>

#### Defined in

[src/types/generated/pipe.ts:8](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L8)

▸ **pipe**<`A`, `B`, `C`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`C`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`C`\>

#### Defined in

[src/types/generated/pipe.ts:11](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L11)

▸ **pipe**<`A`, `B`, `C`, `D`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`D`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`D`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`D`\>

#### Defined in

[src/types/generated/pipe.ts:14](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L14)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`E`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`E`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`E`\>

#### Defined in

[src/types/generated/pipe.ts:22](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L22)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`F`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`F`\>

#### Defined in

[src/types/generated/pipe.ts:31](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L31)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`G`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`G`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`G`\>

#### Defined in

[src/types/generated/pipe.ts:41](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L41)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`H`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`H`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`H`\>

#### Defined in

[src/types/generated/pipe.ts:52](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L52)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`I`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`I`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`I`\>

#### Defined in

[src/types/generated/pipe.ts:64](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L64)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`J`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`J`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`J`\>

#### Defined in

[src/types/generated/pipe.ts:77](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L77)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`K`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`K`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`K`\>

#### Defined in

[src/types/generated/pipe.ts:91](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L91)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`L`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`L`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`L`\>

#### Defined in

[src/types/generated/pipe.ts:106](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L106)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`M`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`M`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`M`\>

#### Defined in

[src/types/generated/pipe.ts:122](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L122)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`N`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`N`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`N`\>

#### Defined in

[src/types/generated/pipe.ts:139](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L139)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`O`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`O`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`O`\>

#### Defined in

[src/types/generated/pipe.ts:157](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L157)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`P`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`P`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`P`\>

#### Defined in

[src/types/generated/pipe.ts:176](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L176)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`Q`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`Q`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`Q`\>

#### Defined in

[src/types/generated/pipe.ts:196](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L196)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`R`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`R`\>

#### Defined in

[src/types/generated/pipe.ts:217](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L217)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`S`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`R`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`S`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`S`\>

#### Defined in

[src/types/generated/pipe.ts:239](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L239)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`T`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`S`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`T`\>

#### Defined in

[src/types/generated/pipe.ts:262](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L262)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`U`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`T`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`U`\>

#### Defined in

[src/types/generated/pipe.ts:286](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L286)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`V`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`U`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`V`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`V`\>

#### Defined in

[src/types/generated/pipe.ts:311](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L311)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`W`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`U`\>, `any`\> |
| `W` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`V`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`W`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`W`\>

#### Defined in

[src/types/generated/pipe.ts:360](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L360)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`X`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`U`\>, `any`\> |
| `W` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`V`\>, `any`\> |
| `X` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`W`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`X`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`X`\>

#### Defined in

[src/types/generated/pipe.ts:411](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L411)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`Y`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`U`\>, `any`\> |
| `W` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`V`\>, `any`\> |
| `X` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`W`\>, `any`\> |
| `Y` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`X`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`Y`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`Y`\>

#### Defined in

[src/types/generated/pipe.ts:464](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L464)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`...args`): (`value`: [`In`](types.md#in)<`A`\>) => `ReturnType`<`Z`\>

Pipes some input value through a series of functions, returning the result.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    pipe(
        filter((x) => x > 0),
        filter((x) => x < 3)
    )
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`U`\>, `any`\> |
| `W` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`V`\>, `any`\> |
| `X` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`W`\>, `any`\> |
| `Y` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`X`\>, `any`\> |
| `Z` | extends [`Pipable`](types.md#pipable)<`ReturnType`<`Y`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`] |

#### Returns

`fn`

▸ (`value`): `ReturnType`<`Z`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`In`](types.md#in)<`A`\> |

##### Returns

`ReturnType`<`Z`\>

#### Defined in

[src/types/generated/pipe.ts:519](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L519)

___

### reduce

▸ **reduce**<`T`, `U`\>(`reducer`, `initialValue?`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => `Promise`<`U`\>

Reduces some input iterable to a value using the provided callback function.
If no initial value is provided, the accumulator starts as the first value of the input iterable and the reducer is ran on the rest of the iterable's values.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    reduce((acc, x) => acc + x)
);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](types.md#reducer)<`T`, [`MaybePromise`](types.md#maybepromise)<`U`\>\> |
| `initialValue?` | `U` |

#### Returns

`fn`

▸ (`input`): `Promise`<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

`Promise`<`U`\>

#### Defined in

[src/helpers/iterable/reduce.ts:19](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/reduce.ts#L19)

___

### some

▸ **some**<`T`\>(`predicate`): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => `Promise`<`boolean`\>

Tests whether any values of some input iterable satisfy the provided predicate.

**`Example`**

```ts
using([1, 2, 3]).pipe(
    some((x) => x === 2)
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`AsyncPredicate`](types.md#asyncpredicate)<`T`\> |

#### Returns

`fn`

▸ (`input`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/helpers/iterable/some.ts:17](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/some.ts#L17)

___

### toArray

▸ **toArray**<`T`\>(): (`input`: [`AnyIterable`](types.md#anyiterable)<`T`\>) => `Promise`<`T`[]\>

Creates a new array from the values of some input iterable.

**`Example`**

```ts
using(new Set([1, 2, 3])).pipe(
    toArray()
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`input`): `Promise`<`T`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AnyIterable`](types.md#anyiterable)<`T`\> |

##### Returns

`Promise`<`T`[]\>

#### Defined in

[src/helpers/iterable/to-array.ts:12](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/iterable/to-array.ts#L12)

## Iterable factories

### randomFloats

▸ **randomFloats**(`range?`, `generator?`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`number`\>

Creates an iterable that yields random floats in the provided range or from 0 to 1 if the range argument is omitted.

**`Example`**

```ts
for (const n of randomFloats([0.1, 9.9])) {
    console.log(n);
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `range?` | [`Range`](types.md#range) |
| `generator?` | () => `number` |

#### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`number`\>

#### Defined in

[src/helpers/generators/random.ts:12](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/generators/random.ts#L12)

___

### randomInts

▸ **randomInts**(`range`, `generator?`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`number`\>

Creates an iterable that yields random integers in the provided range.

**`Example`**

```ts
for (const n of randomInts([0, 10])) {
    console.log(n);
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](types.md#range) |
| `generator?` | () => `number` |

#### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`number`\>

#### Defined in

[src/helpers/generators/random.ts:28](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/generators/random.ts#L28)

___

### range

▸ **range**(`«destructured»`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`number`\>

Creates an iterable that yields integers in order in the provided range.

**`Example`**

```ts
for (const n of range([0, 100])) {
    console.log(n);
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Range`](types.md#range) |

#### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`number`\>

#### Defined in

[src/helpers/generators/range.ts:12](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/generators/range.ts#L12)

## Functions

### using

▸ **using**<`T`\>(`value`): `Object`

Creates a new "cooked" pipe using the provided value as the starting input.

**`Example`**

```ts
using("Hello World!").pipe(
    (str) => str.split(" ")
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `pipe` | [`CookedPipe`](../interfaces/types.CookedPipe.md)<`T`\> |

#### Defined in

[src/util/using.ts:11](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/util/using.ts#L11)

___

### usingIterable

▸ **usingIterable**<`T`\>(`iter`): [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`T`\>

Maps the provided async iterable to an equivalent Peter Piper async iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iter` | `AsyncIterable`<`T`\> |

#### Returns

[`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`T`\>

#### Defined in

[src/util/using-iterable.ts:14](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/util/using-iterable.ts#L14)

▸ **usingIterable**<`T`\>(`iter`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

Maps the provided iterable to an equivalent Peter Piper iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iter` | `Iterable`<`T`\> |

#### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/util/using-iterable.ts:21](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/util/using-iterable.ts#L21)

___

### wrapSync

▸ **wrapSync**<`T`\>(): (`input`: `T`) => [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`input`): [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

[`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/helpers/misc/wrap.ts:22](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/misc/wrap.ts#L22)
