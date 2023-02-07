[peter-piper](../README.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### Interfaces

- [CookedPipe](../interfaces/types.CookedPipe.md)
- [ExtendedAsyncIterable](../interfaces/types.ExtendedAsyncIterable.md)
- [ExtendedIterable](../interfaces/types.ExtendedIterable.md)
- [Pipe](../interfaces/types.Pipe.md)

### Type Aliases

- [AnyIterable](types.md#anyiterable)
- [AnyOf](types.md#anyof)
- [AnySyncIterable](types.md#anysynciterable)
- [AsyncPredicate](types.md#asyncpredicate)
- [Decrement](types.md#decrement)
- [ElementOf](types.md#elementof)
- [Head](types.md#head)
- [In](types.md#in)
- [Increment](types.md#increment)
- [Last](types.md#last)
- [Leading](types.md#leading)
- [Length](types.md#length)
- [MapFn](types.md#mapfn)
- [MaybePromise](types.md#maybepromise)
- [Out](types.md#out)
- [Pipable](types.md#pipable)
- [Predicate](types.md#predicate)
- [Range](types.md#range)
- [Reducer](types.md#reducer)
- [Tail](types.md#tail)
- [Traverse](types.md#traverse)

## Type Aliases

### AnyIterable

Ƭ **AnyIterable**<`T`\>: `Iterable`<`T`\> \| `AsyncIterable`<`T`\> \| [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\> \| [`ExtendedAsyncIterable`](../interfaces/types.ExtendedAsyncIterable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/any-iterable.ts:3](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/any-iterable.ts#L3)

___

### AnyOf

Ƭ **AnyOf**<`T`\>: `T`[`number`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[src/types/list-helpers.ts:1](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/list-helpers.ts#L1)

___

### AnySyncIterable

Ƭ **AnySyncIterable**<`T`\>: `Iterable`<`T`\> \| [`ExtendedIterable`](../interfaces/types.ExtendedIterable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/any-iterable.ts:8](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/any-iterable.ts#L8)

___

### AsyncPredicate

Ƭ **AsyncPredicate**<`T`\>: (`value`: `T`, `index`: `number`) => [`MaybePromise`](types.md#maybepromise)<`boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value`, `index`): [`MaybePromise`](types.md#maybepromise)<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `index` | `number` |

##### Returns

[`MaybePromise`](types.md#maybepromise)<`boolean`\>

#### Defined in

src/types/predicate.ts:5

___

### Decrement

Ƭ **Decrement**<`T`\>: [``-1``, ``0``, ``1``, ``2``, ``3``, ``4``, ``5``, ``6``, ``7``, ``8``, ``9``, ``10``, ``11``, ``12``, ``13``, ``14``, ``15``, ``16``, ``17``, ``18``, ``19``, ``20``, ``21``, ``22``, ``23``, ``24``, ``25``, ``26``, ``27``, ``28``, ``29``][`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Defined in

[src/types/math.ts:1](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/math.ts#L1)

___

### ElementOf

Ƭ **ElementOf**<`T`\>: `T` extends [`AnyIterable`](types.md#anyiterable)<infer V\> ? `V` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyIterable`](types.md#anyiterable)<`unknown`\> |

#### Defined in

src/types/element-of.ts:3

___

### Head

Ƭ **Head**<`T`\>: `T`[``0``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[src/types/list-helpers.ts:17](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/list-helpers.ts#L17)

___

### In

Ƭ **In**<`T`\>: `Parameters`<`T`\>[``0``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Pipable`](types.md#pipable) |

#### Defined in

[src/types/pipable.ts:4](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/pipable.ts#L4)

___

### Increment

Ƭ **Increment**<`T`\>: [``1``, ``2``, ``3``, ``4``, ``5``, ``6``, ``7``, ``8``, ``9``, ``10``, ``11``, ``12``, ``13``, ``14``, ``15``, ``16``, ``17``, ``18``, ``19``, ``20``, ``21``, ``22``, ``23``, ``24``, ``25``, ``26``, ``27``, ``28``, ``29``, ``30``, ``31``][`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Defined in

[src/types/math.ts:35](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/math.ts#L35)

___

### Last

Ƭ **Last**<`T`\>: `T` extends [...unknown[], infer L] ? `L` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[src/types/list-helpers.ts:10](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/list-helpers.ts#L10)

___

### Leading

Ƭ **Leading**<`T`\>: `T` extends [infer L, ...unknown[]] ? `L` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[src/types/list-helpers.ts:3](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/list-helpers.ts#L3)

___

### Length

Ƭ **Length**<`T`\>: `T`[``"length"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[src/types/list-helpers.ts:22](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/list-helpers.ts#L22)

___

### MapFn

Ƭ **MapFn**<`T`, `U`\>: (`value`: `T`, `index`: `number`) => `U`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Type declaration

▸ (`value`, `index`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `index` | `number` |

##### Returns

`U`

#### Defined in

src/types/map-fn.ts:1

___

### MaybePromise

Ƭ **MaybePromise**<`T`\>: `T` \| `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/maybe-promise.ts:1](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/maybe-promise.ts#L1)

___

### Out

Ƭ **Out**<`T`\>: `ReturnType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Pipable`](types.md#pipable) |

#### Defined in

[src/types/pipable.ts:5](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/pipable.ts#L5)

___

### Pipable

Ƭ **Pipable**<`T`, `U`\>: (`x`: `T`) => `U`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `U` | `any` |

#### Type declaration

▸ (`x`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

##### Returns

`U`

#### Defined in

[src/types/pipable.ts:2](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/pipable.ts#L2)

___

### Predicate

Ƭ **Predicate**<`T`\>: (`value`: `T`, `index`: `number`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value`, `index`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `index` | `number` |

##### Returns

`boolean`

#### Defined in

src/types/predicate.ts:3

___

### Range

Ƭ **Range**: [`number`, `number`]

#### Defined in

[src/types/range.ts:1](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/range.ts#L1)

___

### Reducer

Ƭ **Reducer**<`T`, `U`\>: (`accumulator`: `U`, `value`: `T`, `index`: `number`) => `U`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Type declaration

▸ (`accumulator`, `value`, `index`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `accumulator` | `U` |
| `value` | `T` |
| `index` | `number` |

##### Returns

`U`

#### Defined in

src/types/reducer.ts:1

___

### Tail

Ƭ **Tail**<`T`\>: `T` extends [`unknown`, ...(infer U)] ? `U` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[src/types/list-helpers.ts:18](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/list-helpers.ts#L18)

___

### Traverse

Ƭ **Traverse**<`O`, `P`\>: `P` extends [infer Head, ...(infer Tail)] ? `Head` extends keyof `O` ? `Tail` extends [] ? `O`[`Head`] : [`Traverse`](types.md#traverse)<`O`[`Head`], `Tail`\> : `undefined` : `O`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | `O` |
| `P` | extends `unknown`[] |

#### Defined in

[src/types/traverse.ts:1](https://github.com/jdeurt/peter-piper/blob/2d1123c/src/types/traverse.ts#L1)
