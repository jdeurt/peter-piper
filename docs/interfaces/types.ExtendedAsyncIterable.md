[peter-piper](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ExtendedAsyncIterable

# Interface: ExtendedAsyncIterable<T\>

[types](../modules/types.md).ExtendedAsyncIterable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `AsyncIterable`<`T`\>

  ↳ **`ExtendedAsyncIterable`**

## Table of contents

### Properties

- [concat](types.ExtendedAsyncIterable.md#concat)
- [consume](types.ExtendedAsyncIterable.md#consume)
- [every](types.ExtendedAsyncIterable.md#every)
- [filter](types.ExtendedAsyncIterable.md#filter)
- [find](types.ExtendedAsyncIterable.md#find)
- [first](types.ExtendedAsyncIterable.md#first)
- [isEmpty](types.ExtendedAsyncIterable.md#isempty)
- [map](types.ExtendedAsyncIterable.md#map)
- [pipe](types.ExtendedAsyncIterable.md#pipe)
- [reduce](types.ExtendedAsyncIterable.md#reduce)
- [scan](types.ExtendedAsyncIterable.md#scan)
- [slice](types.ExtendedAsyncIterable.md#slice)
- [some](types.ExtendedAsyncIterable.md#some)
- [take](types.ExtendedAsyncIterable.md#take)
- [toArray](types.ExtendedAsyncIterable.md#toarray)

### Methods

- [[asyncIterator]](types.ExtendedAsyncIterable.md#[asynciterator])

## Properties

### concat

• **concat**: (...`iterables`: ([`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`T`\> \| `AsyncIterable`<`T`\> \| `Iterable`<`T`\> \| [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>)[]) => [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Type declaration

▸ (`...iterables`): [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...iterables` | ([`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`T`\> \| `AsyncIterable`<`T`\> \| `Iterable`<`T`\> \| [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>)[] |

##### Returns

[`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

src/types/pp-iterable.ts:31

___

### consume

• **consume**: <U\>(`mapFn?`: [`MapFn`](../modules/types.md#mapfn)<`T`, `U`\>) => `Promise`<`U`[]\>

#### Type declaration

▸ <`U`\>(`mapFn?`): `Promise`<`U`[]\>

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mapFn?` | [`MapFn`](../modules/types.md#mapfn)<`T`, `U`\> |

##### Returns

`Promise`<`U`[]\>

#### Defined in

src/types/pp-iterable.ts:39

___

### every

• **every**: (`predicate`: [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\>) => `Promise`<`boolean`\>

#### Type declaration

▸ (`predicate`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\> |

##### Returns

`Promise`<`boolean`\>

#### Defined in

src/types/pp-iterable.ts:40

___

### filter

• **filter**: (`predicate`: [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\>) => [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Type declaration

▸ (`predicate`): [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

src/types/pp-iterable.ts:41

___

### find

• **find**: (`predicate`: [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\>) => `Promise`<`undefined` \| `T`\>

#### Type declaration

▸ (`predicate`): `Promise`<`undefined` \| `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\> |

##### Returns

`Promise`<`undefined` \| `T`\>

#### Defined in

src/types/pp-iterable.ts:42

___

### first

• **first**: (`predicate?`: [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\>) => [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Type declaration

▸ (`predicate?`): [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\> |

##### Returns

[`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

src/types/pp-iterable.ts:43

___

### isEmpty

• **isEmpty**: () => `Promise`<`boolean`\>

#### Type declaration

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

#### Defined in

src/types/pp-iterable.ts:44

___

### map

• **map**: <U\>(`mapFn`: [`MapFn`](../modules/types.md#mapfn)<`T`, `U`\>) => [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

#### Type declaration

▸ <`U`\>(`mapFn`): [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mapFn` | [`MapFn`](../modules/types.md#mapfn)<`T`, `U`\> |

##### Returns

[`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

#### Defined in

src/types/pp-iterable.ts:45

___

### pipe

• **pipe**: [`CookedPipe`](types.CookedPipe.md)<[`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`T`\>\>

#### Defined in

src/types/pp-iterable.ts:46

___

### reduce

• **reduce**: <U\>(`reducer`: [`Reducer`](../modules/types.md#reducer)<`T`, [`MaybePromise`](../modules/types.md#maybepromise)<`U`\>\>, `initialValue?`: `U`) => `Promise`<`U`\>

#### Type declaration

▸ <`U`\>(`reducer`, `initialValue?`): `Promise`<`U`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/types.md#reducer)<`T`, [`MaybePromise`](../modules/types.md#maybepromise)<`U`\>\> |
| `initialValue?` | `U` |

##### Returns

`Promise`<`U`\>

#### Defined in

src/types/pp-iterable.ts:47

___

### scan

• **scan**: <U\>(`reducer`: [`Reducer`](../modules/types.md#reducer)<`T`, [`MaybePromise`](../modules/types.md#maybepromise)<`U`\>\>, `initialValue?`: `U`) => [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

#### Type declaration

▸ <`U`\>(`reducer`, `initialValue?`): [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/types.md#reducer)<`T`, [`MaybePromise`](../modules/types.md#maybepromise)<`U`\>\> |
| `initialValue?` | `U` |

##### Returns

[`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`U`\>\>

#### Defined in

src/types/pp-iterable.ts:51

___

### slice

• **slice**: (`startIndex`: `number`, `endIndex?`: `number`) => [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Type declaration

▸ (`startIndex`, `endIndex?`): [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex?` | `number` |

##### Returns

[`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

src/types/pp-iterable.ts:55

___

### some

• **some**: (`predicate`: [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\>) => `Promise`<`boolean`\>

#### Type declaration

▸ (`predicate`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`AsyncPredicate`](../modules/types.md#asyncpredicate)<`T`\> |

##### Returns

`Promise`<`boolean`\>

#### Defined in

src/types/pp-iterable.ts:59

___

### take

• **take**: (`n`: `number`) => [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Type declaration

▸ (`n`): [`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

[`ExtendedAsyncIterable`](types.ExtendedAsyncIterable.md)<`Awaited`<`T`\>\>

#### Defined in

src/types/pp-iterable.ts:60

___

### toArray

• **toArray**: () => `Promise`<`T`[]\>

#### Type declaration

▸ (): `Promise`<`T`[]\>

##### Returns

`Promise`<`T`[]\>

#### Defined in

src/types/pp-iterable.ts:61

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`<`T`, `any`, `undefined`\>

#### Returns

`AsyncIterator`<`T`, `any`, `undefined`\>

#### Inherited from

AsyncIterable.\_\_@asyncIterator@21979

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:40
