[peter-piper](../README.md) / [Exports](../modules.md) / CallbackAdapterContext

# Interface: CallbackAdapterContext<T\>

The context of the callback adapter. Contains functions that allow for passing values to the iterable and marking the end of an iterable.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

## Table of contents

### Properties

- [kill](CallbackAdapterContext.md#kill)
- [pass](CallbackAdapterContext.md#pass)

## Properties

### kill

• **kill**: () => `void`

#### Type declaration

▸ (): `void`

Marks the end of the iterable returned by the [callbackAdapter](../modules.md#callbackadapter).

##### Returns

`void`

#### Defined in

[pipables/adapters/callback-adapter.ts:13](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/callback-adapter.ts#L13)

___

### pass

• **pass**: (...`values`: `T`) => `void`

#### Type declaration

▸ (`...values`): `void`

Passes values to the iterable returned by the [callbackAdapter](../modules.md#callbackadapter).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `T` |

##### Returns

`void`

#### Defined in

[pipables/adapters/callback-adapter.ts:8](https://github.com/jdeurt/peter-piper/blob/6dd5367/src/pipables/adapters/callback-adapter.ts#L8)
