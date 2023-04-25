type TagNameMap = {
    [K in keyof HTMLElementTagNameMap]: HTMLElementTagNameMap[K];
} & {
    [K in keyof SVGElementTagNameMap]: SVGElementTagNameMap[K];
};

export type Selector<T extends keyof TagNameMap = keyof TagNameMap> = T;

export type NodeListFromSelector<S extends Selector> = S extends Selector<
    infer T
>
    ? NodeListOf<TagNameMap[T]>
    : NodeListOf<HTMLElement>;

export type NodeFromSelector<S extends Selector> = S extends Selector<infer T>
    ? TagNameMap[T]
    : HTMLElement;
