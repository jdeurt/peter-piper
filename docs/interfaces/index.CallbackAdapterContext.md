[peter-piper](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / CallbackAdapterContext

# Interface: CallbackAdapterContext<T\>

[index](../modules/index.md).CallbackAdapterContext

The context of the callback adapter. Contains functions that allow for passing values to the iterable and marking the end of an iterable.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

## Table of contents

### Properties

- [kill](index.CallbackAdapterContext.md#kill)
- [pass](index.CallbackAdapterContext.md#pass)

## Properties

### kill

• **kill**: () => `void`

#### Type declaration

▸ (): `void`

Marks the end of the iterable returned by the [callbackAdapter](../modules/index.md#callbackadapter).

##### Returns

`void`

#### Defined in

[src/helpers/adapters/callback-adapter.ts:15](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/callback-adapter.ts#L15)

___

### pass

• **pass**: (...`values`: `T`) => `void`

#### Type declaration

▸ (`...values`): `void`

Passes values to the iterable returned by the [callbackAdapter](../modules/index.md#callbackadapter).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `T` |

##### Returns

`void`

#### Defined in

[src/helpers/adapters/callback-adapter.ts:10](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/helpers/adapters/callback-adapter.ts#L10)
