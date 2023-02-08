[peter-piper](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / Pipe

# Interface: Pipe

[types](../modules/types.md).Pipe

## Callable

### Pipe

▸ **Pipe**<`A`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`A`\>

#### Defined in

[src/types/generated/pipe.ts:7](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L7)

### Pipe

▸ **Pipe**<`A`, `B`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`B`\>

#### Defined in

[src/types/generated/pipe.ts:8](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L8)

### Pipe

▸ **Pipe**<`A`, `B`, `C`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`C`\>

#### Defined in

[src/types/generated/pipe.ts:11](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L11)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`D`\>

#### Defined in

[src/types/generated/pipe.ts:14](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L14)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`E`\>

#### Defined in

[src/types/generated/pipe.ts:22](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L22)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`F`\>

#### Defined in

[src/types/generated/pipe.ts:31](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L31)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`G`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`G`\>

#### Defined in

[src/types/generated/pipe.ts:41](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L41)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`H`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`H`\>

#### Defined in

[src/types/generated/pipe.ts:52](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L52)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`I`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`I`\>

#### Defined in

[src/types/generated/pipe.ts:64](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L64)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`J`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`J`\>

#### Defined in

[src/types/generated/pipe.ts:77](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L77)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`K`\>

#### Defined in

[src/types/generated/pipe.ts:91](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L91)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`L`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`L`\>

#### Defined in

[src/types/generated/pipe.ts:106](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L106)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`M`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`M`\>

#### Defined in

[src/types/generated/pipe.ts:122](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L122)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`N`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`N`\>

#### Defined in

[src/types/generated/pipe.ts:139](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L139)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`O`\>

#### Defined in

[src/types/generated/pipe.ts:157](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L157)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`P`\>

#### Defined in

[src/types/generated/pipe.ts:176](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L176)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`Q`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`Q`\>

#### Defined in

[src/types/generated/pipe.ts:196](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L196)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`R`\>

#### Defined in

[src/types/generated/pipe.ts:217](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L217)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`R`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`S`\>

#### Defined in

[src/types/generated/pipe.ts:239](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L239)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`S`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`T`\>

#### Defined in

[src/types/generated/pipe.ts:262](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L262)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`T`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`U`\>

#### Defined in

[src/types/generated/pipe.ts:286](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L286)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`U`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`V`\>

#### Defined in

[src/types/generated/pipe.ts:311](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L311)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`W`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`U`\>, `any`\> |
| `W` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`V`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`W`\>

#### Defined in

[src/types/generated/pipe.ts:360](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L360)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`X`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`U`\>, `any`\> |
| `W` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`V`\>, `any`\> |
| `X` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`W`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`X`\>

#### Defined in

[src/types/generated/pipe.ts:411](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L411)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`Y`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`U`\>, `any`\> |
| `W` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`V`\>, `any`\> |
| `X` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`W`\>, `any`\> |
| `Y` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`X`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`Y`\>

#### Defined in

[src/types/generated/pipe.ts:464](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L464)

### Pipe

▸ **Pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`...args`): (`value`: [`In`](../modules/types.md#in)<`A`\>) => `ReturnType`<`Z`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`any`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |
| `F` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`E`\>, `any`\> |
| `G` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`F`\>, `any`\> |
| `H` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`G`\>, `any`\> |
| `I` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`H`\>, `any`\> |
| `J` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`I`\>, `any`\> |
| `K` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`J`\>, `any`\> |
| `L` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`K`\>, `any`\> |
| `M` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`L`\>, `any`\> |
| `N` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`M`\>, `any`\> |
| `O` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`N`\>, `any`\> |
| `P` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`O`\>, `any`\> |
| `Q` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`P`\>, `any`\> |
| `R` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Q`\>, `any`\> |
| `S` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`R`\>, `any`\> |
| `T` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`S`\>, `any`\> |
| `U` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`T`\>, `any`\> |
| `V` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`U`\>, `any`\> |
| `W` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`V`\>, `any`\> |
| `X` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`W`\>, `any`\> |
| `Y` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`X`\>, `any`\> |
| `Z` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`Y`\>, `any`\> |

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
| `value` | [`In`](../modules/types.md#in)<`A`\> |

##### Returns

`ReturnType`<`Z`\>

#### Defined in

[src/types/generated/pipe.ts:519](https://github.com/jdeurt/peter-piper/blob/8cd568d/src/types/generated/pipe.ts#L519)
