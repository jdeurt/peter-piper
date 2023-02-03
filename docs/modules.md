[peter-piper](README.md) / Exports

# peter-piper

## Table of contents

### Interfaces

- [CallbackAdapterContext](interfaces/CallbackAdapterContext.md)

### Type Aliases

- [CleanupFn](modules.md#cleanupfn)
- [FactoryFn](modules.md#factoryfn)

### Variables

- [\_\_](modules.md#__)

### Other helpers

- [assertType](modules.md#asserttype)
- [isEmpty](modules.md#isempty)
- [useSideEffect](modules.md#usesideeffect)

### Adapters

- [callbackAdapter](modules.md#callbackadapter)
- [customAdapter](modules.md#customadapter)
- [streamAdapter](modules.md#streamadapter)
- [withCallbackAdapter](modules.md#withcallbackadapter)
- [withCustomAdapter](modules.md#withcustomadapter)
- [withStreamAdapter](modules.md#withstreamadapter)

### Lazy helpers

- [concat](modules.md#concat)
- [filter](modules.md#filter)
- [first](modules.md#first)
- [map](modules.md#map)
- [scan](modules.md#scan)
- [slice](modules.md#slice)
- [take](modules.md#take)

### Greedy helpers

- [consume](modules.md#consume)
- [deeplyEquals](modules.md#deeplyequals)
- [equals](modules.md#equals)
- [every](modules.md#every)
- [find](modules.md#find)
- [fork](modules.md#fork)
- [isFalsy](modules.md#isfalsy)
- [isOneOf](modules.md#isoneof)
- [isTruthy](modules.md#istruthy)
- [match](modules.md#match)
- [pipe](modules.md#pipe)
- [reduce](modules.md#reduce)
- [some](modules.md#some)
- [toArray](modules.md#toarray)

### Functions

- [using](modules.md#using)

## Type Aliases

### CleanupFn

Ƭ **CleanupFn**<`T`, `U`\>: (`context`: [`CallbackAdapterContext`](interfaces/CallbackAdapterContext.md)<`U`\>, `target`: `T`) => `unknown`

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
| `context` | [`CallbackAdapterContext`](interfaces/CallbackAdapterContext.md)<`U`\> |
| `target` | `T` |

##### Returns

`unknown`

#### Defined in

[pipables/adapters/callback-adapter.ts:21](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/callback-adapter.ts#L21)

___

### FactoryFn

Ƭ **FactoryFn**<`T`, `U`\>: (`context`: [`CallbackAdapterContext`](interfaces/CallbackAdapterContext.md)<`U`\>, `target`: `T`) => `unknown`

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
| `context` | [`CallbackAdapterContext`](interfaces/CallbackAdapterContext.md)<`U`\> |
| `target` | `T` |

##### Returns

`unknown`

#### Defined in

[pipables/adapters/callback-adapter.ts:16](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/callback-adapter.ts#L16)

## Variables

### \_\_

• `Const` **\_\_**: typeof [`__`](modules.md#__)

A placeholder symbol.

#### Defined in

[constants/placeholder.ts:4](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/constants/placeholder.ts#L4)

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

[pipables/misc/assert-type.ts:11](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/misc/assert-type.ts#L11)

___

### isEmpty

▸ **isEmpty**(): (`input`: `AnyIterable`<`unknown`\>) => `Promise`<`boolean`\>

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
| `input` | `AnyIterable`<`unknown`\> |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[pipables/iterable/is-empty.ts:13](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/is-empty.ts#L13)

___

### useSideEffect

▸ **useSideEffect**<`T`\>(`sideEffect`): (`input`: `T`) => `T`

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

▸ (`input`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

`T`

#### Defined in

[pipables/misc/use-side-effect.ts:10](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/misc/use-side-effect.ts#L10)

## Adapters

### callbackAdapter

▸ **callbackAdapter**<`U`\>(`factory`, `cleanup?`): `AsyncIterable`<`U`\>

A non-currying variant of [withCallbackAdapter](modules.md#withcallbackadapter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`FactoryFn`](modules.md#factoryfn)<`undefined`, `U`\> |
| `cleanup?` | [`CleanupFn`](modules.md#cleanupfn)<`undefined`, `U`\> |

#### Returns

`AsyncIterable`<`U`\>

#### Defined in

[pipables/adapters/callback-adapter.ts:95](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/callback-adapter.ts#L95)

___

### customAdapter

▸ **customAdapter**<`U`\>(`adapter`): `AsyncIterable`<`U`\>

A non-currying variant of [withCustomAdapter](modules.md#withcustomadapter).

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | `Adapter`<`undefined`, `U`\> |

#### Returns

`AsyncIterable`<`U`\>

#### Defined in

[pipables/adapters/custom-adapter.ts:21](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/custom-adapter.ts#L21)

___

### streamAdapter

▸ **streamAdapter**<`T`\>(`stream`): `AsyncIterable`<`T`\>

A non-currying variant of [withStreamAdapter](modules.md#withstreamadapter).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `ReadableStream`<`T`\> |

#### Returns

`AsyncIterable`<`T`\>

#### Defined in

[pipables/adapters/stream-adapter.ts:28](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/stream-adapter.ts#L28)

___

### withCallbackAdapter

▸ **withCallbackAdapter**<`T`, `U`\>(`factory`, `cleanup?`): (`input`: `T`) => `AsyncIterable`<`U`\>

Creates an async iterable that generates values passed via calling `pass` in the [CallbackAdapterContext](interfaces/CallbackAdapterContext.md).

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
| `factory` | [`FactoryFn`](modules.md#factoryfn)<`T`, `U`\> |
| `cleanup?` | [`CleanupFn`](modules.md#cleanupfn)<`T`, `U`\> |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

`AsyncIterable`<`U`\>

#### Defined in

[pipables/adapters/callback-adapter.ts:36](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/callback-adapter.ts#L36)

___

### withCustomAdapter

▸ **withCustomAdapter**<`T`, `U`\>(`adapter`): (`input`: `T`) => `AsyncIterable`<`U`\>

Maps some input value to an async iterable in accordance with the provided adapter function.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | `Adapter`<`T`, `U`\> |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

##### Returns

`AsyncIterable`<`U`\>

#### Defined in

[pipables/adapters/custom-adapter.ts:11](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/custom-adapter.ts#L11)

___

### withStreamAdapter

▸ **withStreamAdapter**<`T`\>(): (`input`: `ReadableStream`<`T`\>) => `AsyncIterable`<`T`\>

Maps some input stream to an equivalent async iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `ReadableStream`<`T`\> |

##### Returns

`AsyncIterable`<`T`\>

#### Defined in

[pipables/adapters/stream-adapter.ts:8](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/stream-adapter.ts#L8)

## Lazy helpers

### concat

▸ **concat**<`T`\>(`...iterables`): (`input`: `AnyIterable`<`T`\>) => `AsyncIterable`<`T`\>

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
| `...iterables` | `AnyIterable`<`T`\>[] |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`AsyncIterable`<`T`\>

#### Defined in

[pipables/iterable/concat.ts:13](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/concat.ts#L13)

___

### filter

▸ **filter**<`T`\>(`predicate`): (`input`: `AnyIterable`<`T`\>) => `AsyncIterable`<`T`\>

Creates a new iterable containing all values of some input iterable that satisfy the provided predicate.

**`Example`**

```ts
using([1, 0, 0, 1, 0]).pipe(
    filter((x) => x === 1);
);
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`) => `MaybePromise`<`boolean`\> |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`AsyncIterable`<`T`\>

#### Defined in

[pipables/iterable/filter.ts:14](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/filter.ts#L14)

___

### first

▸ **first**<`T`\>(`predicate?`): (`input`: `AnyIterable`<`T`\>) => `AsyncIterable`<`T`\>

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
| `predicate?` | (`value`: `T`, `index`: `number`) => `MaybePromise`<`boolean`\> |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`AsyncIterable`<`T`\>

#### Defined in

[pipables/iterable/first.ts:14](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/first.ts#L14)

___

### map

▸ **map**<`T`, `U`\>(`callback`): (`input`: `AnyIterable`<`T`\>) => `AsyncIterable`<`U`\>

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
| `callback` | (`value`: `T`, `index`: `number`) => `MaybePromise`<`U`\> |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`AsyncIterable`<`U`\>

#### Defined in

[pipables/iterable/map.ts:14](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/map.ts#L14)

___

### scan

▸ **scan**<`T`, `U`\>(`callback`, `initialValue?`): (`input`: `AnyIterable`<`T`\>) => `AsyncIterable`<`U`\>

Similar to [reduce](modules.md#reduce) except returns an iterable with values corresponding to the result of each reduction step.

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
| `callback` | (`accumulator`: `U`, `value`: `T`, `index`: `number`) => `MaybePromise`<`U`\> |
| `initialValue?` | `U` |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`AsyncIterable`<`U`\>

#### Defined in

[pipables/iterable/scan.ts:15](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/scan.ts#L15)

___

### slice

▸ **slice**<`T`\>(`startIndex`, `endIndex?`): (`input`: `AnyIterable`<`T`\>) => `AsyncIterable`<`T`\>

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

▸ (`input`): `AsyncIterable`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`AsyncIterable`<`T`\>

#### Defined in

[pipables/iterable/slice.ts:14](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/slice.ts#L14)

___

### take

▸ **take**<`T`\>(`x`): (`input`: `AnyIterable`<`T`\>) => `AsyncIterable`<`T`\>

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
| `x` | `number` |

#### Returns

`fn`

▸ (`input`): `AsyncIterable`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`AsyncIterable`<`T`\>

#### Defined in

[pipables/iterable/take.ts:13](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/take.ts#L13)

## Greedy helpers

### consume

▸ **consume**<`T`, `U`\>(`callback?`): (`input`: `AnyIterable`<`T`\>) => `Promise`<`U`[]\>

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
| `callback?` | (`value`: `T`) => `MaybePromise`<`U`\> |

#### Returns

`fn`

▸ (`input`): `Promise`<`U`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`Promise`<`U`[]\>

#### Defined in

[pipables/iterable/consume.ts:18](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/consume.ts#L18)

___

### deeplyEquals

▸ **deeplyEquals**(`value`): (`input`: `unknown`) => `boolean`

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

[pipables/misc/deeply-equals.ts:10](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/misc/deeply-equals.ts#L10)

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

[pipables/misc/equals.ts:9](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/misc/equals.ts#L9)

___

### every

▸ **every**<`T`\>(`predicate`): (`input`: `AnyIterable`<`T`\>) => `Promise`<`boolean`\>

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
| `predicate` | (`value`: `T`, `index`: `number`) => `MaybePromise`<`boolean`\> |

#### Returns

`fn`

▸ (`input`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[pipables/iterable/every.ts:14](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/every.ts#L14)

___

### find

▸ **find**<`T`\>(`predicate`): (`input`: `AnyIterable`<`T`\>) => `Promise`<`undefined` \| `T`\>

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
| `predicate` | (`value`: `T`, `index`: `number`) => `MaybePromise`<`boolean`\> |

#### Returns

`fn`

▸ (`input`): `Promise`<`undefined` \| `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`Promise`<`undefined` \| `T`\>

#### Defined in

[pipables/iterable/find.ts:14](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/find.ts#L14)

___

### fork

▸ **fork**<`T`\>(`...paths`): (`input`: `ForkPathInputValueType`<`T`\>) => `ForkPathReturnValueType`<`T`\>

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
| `T` | extends `ForkPath`<`never`, `unknown`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `T` |

#### Returns

`fn`

▸ (`input`): `ForkPathReturnValueType`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `ForkPathInputValueType`<`T`\> |

##### Returns

`ForkPathReturnValueType`<`T`\>

#### Defined in

[pipables/routing/fork.ts:28](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/routing/fork.ts#L28)

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

[pipables/misc/is-falsy.ts:9](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/misc/is-falsy.ts#L9)

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

[pipables/misc/is-one-of.ts:10](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/misc/is-one-of.ts#L10)

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

[pipables/misc/is-truthy.ts:9](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/misc/is-truthy.ts#L9)

___

### match

▸ **match**<`T`\>(`...paths`): (`input`: `MatchPathInputValueType`<`T`\>) => `Promise`<`T` extends `MatchPaths` ? `undefined` \| `MatchPathReturnValueType`<`T`\> : `MatchPathReturnValueType`<`T`\>\>

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
| `T` | extends `MatchPathsWithFallback` \| `MatchPaths` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `T` |

#### Returns

`fn`

▸ (`input`): `Promise`<`T` extends `MatchPaths` ? `undefined` \| `MatchPathReturnValueType`<`T`\> : `MatchPathReturnValueType`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `MatchPathInputValueType`<`T`\> |

##### Returns

`Promise`<`T` extends `MatchPaths` ? `undefined` \| `MatchPathReturnValueType`<`T`\> : `MatchPathReturnValueType`<`T`\>\>

#### Defined in

[pipables/routing/match.ts:58](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/routing/match.ts#L58)

___

### pipe

▸ **pipe**<`A`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`A`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`A`\>

#### Defined in

[types/generated/pipe.ts:7](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L7)

▸ **pipe**<`A`, `B`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`B`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`B`\>

#### Defined in

[types/generated/pipe.ts:8](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L8)

▸ **pipe**<`A`, `B`, `C`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`C`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`C`\>

#### Defined in

[types/generated/pipe.ts:11](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L11)

▸ **pipe**<`A`, `B`, `C`, `D`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`D`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`D`\>

#### Defined in

[types/generated/pipe.ts:14](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L14)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`E`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`E`\>

#### Defined in

[types/generated/pipe.ts:22](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L22)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`F`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`F`\>

#### Defined in

[types/generated/pipe.ts:31](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L31)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`G`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`G`\>

#### Defined in

[types/generated/pipe.ts:41](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L41)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`H`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`H`\>

#### Defined in

[types/generated/pipe.ts:52](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L52)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`I`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`I`\>

#### Defined in

[types/generated/pipe.ts:64](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L64)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`J`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`J`\>

#### Defined in

[types/generated/pipe.ts:77](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L77)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`K`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`K`\>

#### Defined in

[types/generated/pipe.ts:91](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L91)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`L`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`L`\>

#### Defined in

[types/generated/pipe.ts:106](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L106)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`M`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`M`\>

#### Defined in

[types/generated/pipe.ts:122](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L122)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`N`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`N`\>

#### Defined in

[types/generated/pipe.ts:139](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L139)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`O`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`O`\>

#### Defined in

[types/generated/pipe.ts:157](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L157)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`P`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`P`\>

#### Defined in

[types/generated/pipe.ts:176](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L176)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`Q`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`Q`\>

#### Defined in

[types/generated/pipe.ts:196](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L196)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`R`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`R`\>

#### Defined in

[types/generated/pipe.ts:217](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L217)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`S`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends `Pipable`<`ReturnType`<`R`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`S`\>

#### Defined in

[types/generated/pipe.ts:239](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L239)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`T`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends `Pipable`<`ReturnType`<`R`\>, `any`\> |
| `T` | extends `Pipable`<`ReturnType`<`S`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`T`\>

#### Defined in

[types/generated/pipe.ts:262](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L262)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`U`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends `Pipable`<`ReturnType`<`R`\>, `any`\> |
| `T` | extends `Pipable`<`ReturnType`<`S`\>, `any`\> |
| `U` | extends `Pipable`<`ReturnType`<`T`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`U`\>

#### Defined in

[types/generated/pipe.ts:286](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L286)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`V`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends `Pipable`<`ReturnType`<`R`\>, `any`\> |
| `T` | extends `Pipable`<`ReturnType`<`S`\>, `any`\> |
| `U` | extends `Pipable`<`ReturnType`<`T`\>, `any`\> |
| `V` | extends `Pipable`<`ReturnType`<`U`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`V`\>

#### Defined in

[types/generated/pipe.ts:311](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L311)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`W`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends `Pipable`<`ReturnType`<`R`\>, `any`\> |
| `T` | extends `Pipable`<`ReturnType`<`S`\>, `any`\> |
| `U` | extends `Pipable`<`ReturnType`<`T`\>, `any`\> |
| `V` | extends `Pipable`<`ReturnType`<`U`\>, `any`\> |
| `W` | extends `Pipable`<`ReturnType`<`V`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`W`\>

#### Defined in

[types/generated/pipe.ts:360](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L360)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`X`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends `Pipable`<`ReturnType`<`R`\>, `any`\> |
| `T` | extends `Pipable`<`ReturnType`<`S`\>, `any`\> |
| `U` | extends `Pipable`<`ReturnType`<`T`\>, `any`\> |
| `V` | extends `Pipable`<`ReturnType`<`U`\>, `any`\> |
| `W` | extends `Pipable`<`ReturnType`<`V`\>, `any`\> |
| `X` | extends `Pipable`<`ReturnType`<`W`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`X`\>

#### Defined in

[types/generated/pipe.ts:411](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L411)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`Y`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends `Pipable`<`ReturnType`<`R`\>, `any`\> |
| `T` | extends `Pipable`<`ReturnType`<`S`\>, `any`\> |
| `U` | extends `Pipable`<`ReturnType`<`T`\>, `any`\> |
| `V` | extends `Pipable`<`ReturnType`<`U`\>, `any`\> |
| `W` | extends `Pipable`<`ReturnType`<`V`\>, `any`\> |
| `X` | extends `Pipable`<`ReturnType`<`W`\>, `any`\> |
| `Y` | extends `Pipable`<`ReturnType`<`X`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`Y`\>

#### Defined in

[types/generated/pipe.ts:464](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L464)

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`...args`): (`value`: `In`<`A`\>) => `ReturnType`<`Z`\>

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
| `A` | extends `Pipable`<`any`, `any`\> |
| `B` | extends `Pipable`<`ReturnType`<`A`\>, `any`\> |
| `C` | extends `Pipable`<`ReturnType`<`B`\>, `any`\> |
| `D` | extends `Pipable`<`ReturnType`<`C`\>, `any`\> |
| `E` | extends `Pipable`<`ReturnType`<`D`\>, `any`\> |
| `F` | extends `Pipable`<`ReturnType`<`E`\>, `any`\> |
| `G` | extends `Pipable`<`ReturnType`<`F`\>, `any`\> |
| `H` | extends `Pipable`<`ReturnType`<`G`\>, `any`\> |
| `I` | extends `Pipable`<`ReturnType`<`H`\>, `any`\> |
| `J` | extends `Pipable`<`ReturnType`<`I`\>, `any`\> |
| `K` | extends `Pipable`<`ReturnType`<`J`\>, `any`\> |
| `L` | extends `Pipable`<`ReturnType`<`K`\>, `any`\> |
| `M` | extends `Pipable`<`ReturnType`<`L`\>, `any`\> |
| `N` | extends `Pipable`<`ReturnType`<`M`\>, `any`\> |
| `O` | extends `Pipable`<`ReturnType`<`N`\>, `any`\> |
| `P` | extends `Pipable`<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends `Pipable`<`ReturnType`<`P`\>, `any`\> |
| `R` | extends `Pipable`<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends `Pipable`<`ReturnType`<`R`\>, `any`\> |
| `T` | extends `Pipable`<`ReturnType`<`S`\>, `any`\> |
| `U` | extends `Pipable`<`ReturnType`<`T`\>, `any`\> |
| `V` | extends `Pipable`<`ReturnType`<`U`\>, `any`\> |
| `W` | extends `Pipable`<`ReturnType`<`V`\>, `any`\> |
| `X` | extends `Pipable`<`ReturnType`<`W`\>, `any`\> |
| `Y` | extends `Pipable`<`ReturnType`<`X`\>, `any`\> |
| `Z` | extends `Pipable`<`ReturnType`<`Y`\>, `any`\> |

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
| `value` | `In`<`A`\> |

##### Returns

`ReturnType`<`Z`\>

#### Defined in

[types/generated/pipe.ts:519](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/types/generated/pipe.ts#L519)

___

### reduce

▸ **reduce**<`T`, `U`\>(`callback`, `initialValue?`): (`input`: `AnyIterable`<`T`\>) => `Promise`<`U`\>

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
| `callback` | (`accumulator`: `U`, `value`: `T`, `index`: `number`) => `MaybePromise`<`U`\> |
| `initialValue?` | `U` |

#### Returns

`fn`

▸ (`input`): `Promise`<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`Promise`<`U`\>

#### Defined in

[pipables/iterable/reduce.ts:16](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/reduce.ts#L16)

___

### some

▸ **some**<`T`\>(`predicate`): (`input`: `AnyIterable`<`T`\>) => `Promise`<`boolean`\>

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
| `predicate` | (`value`: `T`, `index`: `number`) => `MaybePromise`<`boolean`\> |

#### Returns

`fn`

▸ (`input`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `AnyIterable`<`T`\> |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[pipables/iterable/some.ts:14](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/some.ts#L14)

___

### toArray

▸ **toArray**<`T`\>(): (`input`: `AnyIterable`<`T`\>) => `Promise`<`T`[]\>

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
| `input` | `AnyIterable`<`T`\> |

##### Returns

`Promise`<`T`[]\>

#### Defined in

[pipables/iterable/to-array.ts:13](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/iterable/to-array.ts#L13)

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
| `pipe` | `CookedPipe`<`T`\> |

#### Defined in

[index.ts:11](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/index.ts#L11)