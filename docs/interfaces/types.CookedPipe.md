[peter-piper](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / CookedPipe

# Interface: CookedPipe<In\>

[types](../modules/types.md).CookedPipe

## Type parameters

| Name |
| :------ |
| `In` |

## Callable

### CookedPipe

▸ **CookedPipe**<`A`\>(`...args`): `ReturnType`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`] |

#### Returns

`ReturnType`<`A`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:7](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L7)

### CookedPipe

▸ **CookedPipe**<`A`, `B`\>(`...args`): `ReturnType`<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`] |

#### Returns

`ReturnType`<`B`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:8](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L8)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`\>(`...args`): `ReturnType`<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`] |

#### Returns

`ReturnType`<`C`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:9](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L9)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`\>(`...args`): `ReturnType`<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`] |

#### Returns

`ReturnType`<`D`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:16](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L16)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`\>(`...args`): `ReturnType`<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
| `B` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`A`\>, `any`\> |
| `C` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`B`\>, `any`\> |
| `D` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`C`\>, `any`\> |
| `E` | extends [`Pipable`](../modules/types.md#pipable)<`ReturnType`<`D`\>, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`A`, `B`, `C`, `D`, `E`] |

#### Returns

`ReturnType`<`E`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:24](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L24)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`...args`): `ReturnType`<`F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`F`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:33](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L33)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`...args`): `ReturnType`<`G`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`G`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:43](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L43)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`...args`): `ReturnType`<`H`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`H`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:54](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L54)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`...args`): `ReturnType`<`I`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`I`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:66](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L66)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`...args`): `ReturnType`<`J`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`J`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:79](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L79)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`...args`): `ReturnType`<`K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`K`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:93](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L93)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`...args`): `ReturnType`<`L`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`L`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:108](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L108)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`\>(`...args`): `ReturnType`<`M`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`M`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:124](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L124)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`\>(`...args`): `ReturnType`<`N`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`N`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:141](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L141)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`\>(`...args`): `ReturnType`<`O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`O`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:159](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L159)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`\>(`...args`): `ReturnType`<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`P`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:178](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L178)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`\>(`...args`): `ReturnType`<`Q`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`Q`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:198](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L198)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`\>(`...args`): `ReturnType`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`R`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:219](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L219)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`\>(`...args`): `ReturnType`<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`S`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:241](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L241)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`\>(`...args`): `ReturnType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`T`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:264](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L264)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`\>(`...args`): `ReturnType`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`U`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:288](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L288)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`\>(`...args`): `ReturnType`<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`V`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:313](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L313)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`\>(`...args`): `ReturnType`<`W`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`W`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:362](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L362)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`\>(`...args`): `ReturnType`<`X`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`X`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:413](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L413)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`\>(`...args`): `ReturnType`<`Y`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`Y`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:466](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L466)

### CookedPipe

▸ **CookedPipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`...args`): `ReturnType`<`Z`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Pipable`](../modules/types.md#pipable)<`In`, `any`\> |
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

`ReturnType`<`Z`\>

#### Defined in

[src/types/generated/cooked-pipe.ts:521](https://github.com/jdeurt/peter-piper/blob/8780023/src/types/generated/cooked-pipe.ts#L521)
