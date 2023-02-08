[peter-piper](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ExtendedIterable

# Interface: ExtendedIterable<T\>

[types](../modules/types.md).ExtendedIterable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Iterable`<`T`\>

  ↳ **`ExtendedIterable`**

## Table of contents

### Properties

- [concat](types.ExtendedIterable.md#concat)
- [consume](types.ExtendedIterable.md#consume)
- [every](types.ExtendedIterable.md#every)
- [filter](types.ExtendedIterable.md#filter)
- [find](types.ExtendedIterable.md#find)
- [first](types.ExtendedIterable.md#first)
- [isEmpty](types.ExtendedIterable.md#isempty)
- [map](types.ExtendedIterable.md#map)
- [pipe](types.ExtendedIterable.md#pipe)
- [reduce](types.ExtendedIterable.md#reduce)
- [scan](types.ExtendedIterable.md#scan)
- [slice](types.ExtendedIterable.md#slice)
- [some](types.ExtendedIterable.md#some)
- [take](types.ExtendedIterable.md#take)
- [toArray](types.ExtendedIterable.md#toarray)

### Methods

- [[iterator]](types.ExtendedIterable.md#[iterator])

## Properties

### concat

• **concat**: (...`iterables`: ([`ExtendedIterable`](types.ExtendedIterable.md)<`T`\> \| `Iterable`<`T`\>)[]) => [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Type declaration

▸ (`...iterables`): [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...iterables` | ([`ExtendedIterable`](types.ExtendedIterable.md)<`T`\> \| `Iterable`<`T`\>)[] |

##### Returns

[`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/types/pp-iterable.ts:8](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L8)

___

### consume

• **consume**: <U\>(`mapFn?`: [`MapFn`](../modules/types.md#mapfn)<`T`, `U`\>) => `U`[]

#### Type declaration

▸ <`U`\>(`mapFn?`): `U`[]

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mapFn?` | [`MapFn`](../modules/types.md#mapfn)<`T`, `U`\> |

##### Returns

`U`[]

#### Defined in

[src/types/pp-iterable.ts:11](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L11)

___

### every

• **every**: (`predicate`: [`Predicate`](../modules/types.md#predicate)<`T`\>) => `boolean`

#### Type declaration

▸ (`predicate`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/types.md#predicate)<`T`\> |

##### Returns

`boolean`

#### Defined in

[src/types/pp-iterable.ts:12](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L12)

___

### filter

• **filter**: (`predicate`: [`Predicate`](../modules/types.md#predicate)<`T`\>) => [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Type declaration

▸ (`predicate`): [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/types.md#predicate)<`T`\> |

##### Returns

[`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/types/pp-iterable.ts:13](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L13)

___

### find

• **find**: (`predicate`: [`Predicate`](../modules/types.md#predicate)<`T`\>) => `undefined` \| `T`

#### Type declaration

▸ (`predicate`): `undefined` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/types.md#predicate)<`T`\> |

##### Returns

`undefined` \| `T`

#### Defined in

[src/types/pp-iterable.ts:14](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L14)

___

### first

• **first**: (`predicate?`: [`Predicate`](../modules/types.md#predicate)<`T`\>) => [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Type declaration

▸ (`predicate?`): [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | [`Predicate`](../modules/types.md#predicate)<`T`\> |

##### Returns

[`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/types/pp-iterable.ts:15](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L15)

___

### isEmpty

• **isEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[src/types/pp-iterable.ts:16](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L16)

___

### map

• **map**: <U\>(`mapFn`: [`MapFn`](../modules/types.md#mapfn)<`T`, `U`\>) => [`ExtendedIterable`](types.ExtendedIterable.md)<`U`\>

#### Type declaration

▸ <`U`\>(`mapFn`): [`ExtendedIterable`](types.ExtendedIterable.md)<`U`\>

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mapFn` | [`MapFn`](../modules/types.md#mapfn)<`T`, `U`\> |

##### Returns

[`ExtendedIterable`](types.ExtendedIterable.md)<`U`\>

#### Defined in

[src/types/pp-iterable.ts:17](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L17)

___

### pipe

• **pipe**: [`CookedPipe`](types.CookedPipe.md)<[`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>\>

#### Defined in

[src/types/pp-iterable.ts:18](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L18)

___

### reduce

• **reduce**: <U\>(`reducer`: [`Reducer`](../modules/types.md#reducer)<`T`, `U`\>, `initialValue?`: `U`) => `U`

#### Type declaration

▸ <`U`\>(`reducer`, `initialValue?`): `U`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/types.md#reducer)<`T`, `U`\> |
| `initialValue?` | `U` |

##### Returns

`U`

#### Defined in

[src/types/pp-iterable.ts:19](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L19)

___

### scan

• **scan**: <U\>(`reducer`: [`Reducer`](../modules/types.md#reducer)<`T`, `U`\>, `initialValue?`: `U`) => [`ExtendedIterable`](types.ExtendedIterable.md)<`U`\>

#### Type declaration

▸ <`U`\>(`reducer`, `initialValue?`): [`ExtendedIterable`](types.ExtendedIterable.md)<`U`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/types.md#reducer)<`T`, `U`\> |
| `initialValue?` | `U` |

##### Returns

[`ExtendedIterable`](types.ExtendedIterable.md)<`U`\>

#### Defined in

[src/types/pp-iterable.ts:20](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L20)

___

### slice

• **slice**: (`startIndex`: `number`, `endIndex?`: `number`) => [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Type declaration

▸ (`startIndex`, `endIndex?`): [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex?` | `number` |

##### Returns

[`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/types/pp-iterable.ts:24](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L24)

___

### some

• **some**: (`predicate`: [`Predicate`](../modules/types.md#predicate)<`T`\>) => `boolean`

#### Type declaration

▸ (`predicate`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/types.md#predicate)<`T`\> |

##### Returns

`boolean`

#### Defined in

[src/types/pp-iterable.ts:25](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L25)

___

### take

• **take**: (`n`: `number`) => [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Type declaration

▸ (`n`): [`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

[`ExtendedIterable`](types.ExtendedIterable.md)<`T`\>

#### Defined in

[src/types/pp-iterable.ts:26](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L26)

___

### toArray

• **toArray**: () => `T`[]

#### Type declaration

▸ (): `T`[]

##### Returns

`T`[]

#### Defined in

[src/types/pp-iterable.ts:27](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/pp-iterable.ts#L27)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Inherited from

Iterable.\_\_@iterator@85

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:51
