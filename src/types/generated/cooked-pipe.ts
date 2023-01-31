/* THIS FILE WAS AUTOMATICALLY GENERATED BY `scripts/generators/types/cooked-pipe.js` */
/* DO NOT MODIFY THIS FILE */

import type { Out, Pipable } from "../pipable.js";

export interface CookedPipe<In> {
<A extends Pipable<In>>(...args: [A]): Out<A>;
<A extends Pipable<In>, B extends Pipable<Out<A>>>(...args: [A, B]): Out<B>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>>(...args: [A, B, C]): Out<C>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>>(...args: [A, B, C, D]): Out<D>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>>(...args: [A, B, C, D, E]): Out<E>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>>(...args: [A, B, C, D, E, F]): Out<F>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>>(...args: [A, B, C, D, E, F, G]): Out<G>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>>(...args: [A, B, C, D, E, F, G, H]): Out<H>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>>(...args: [A, B, C, D, E, F, G, H, I]): Out<I>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>>(...args: [A, B, C, D, E, F, G, H, I, J]): Out<J>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>>(...args: [A, B, C, D, E, F, G, H, I, J, K]): Out<K>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L]): Out<L>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M]): Out<M>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N]): Out<N>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O]): Out<O>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P]): Out<P>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q]): Out<Q>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R]): Out<R>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>, S extends Pipable<Out<R>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S]): Out<S>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>, S extends Pipable<Out<R>>, T extends Pipable<Out<S>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T]): Out<T>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>, S extends Pipable<Out<R>>, T extends Pipable<Out<S>>, U extends Pipable<Out<T>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U]): Out<U>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>, S extends Pipable<Out<R>>, T extends Pipable<Out<S>>, U extends Pipable<Out<T>>, V extends Pipable<Out<U>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V]): Out<V>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>, S extends Pipable<Out<R>>, T extends Pipable<Out<S>>, U extends Pipable<Out<T>>, V extends Pipable<Out<U>>, W extends Pipable<Out<V>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W]): Out<W>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>, S extends Pipable<Out<R>>, T extends Pipable<Out<S>>, U extends Pipable<Out<T>>, V extends Pipable<Out<U>>, W extends Pipable<Out<V>>, X extends Pipable<Out<W>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X]): Out<X>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>, S extends Pipable<Out<R>>, T extends Pipable<Out<S>>, U extends Pipable<Out<T>>, V extends Pipable<Out<U>>, W extends Pipable<Out<V>>, X extends Pipable<Out<W>>, Y extends Pipable<Out<X>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y]): Out<Y>;
<A extends Pipable<In>, B extends Pipable<Out<A>>, C extends Pipable<Out<B>>, D extends Pipable<Out<C>>, E extends Pipable<Out<D>>, F extends Pipable<Out<E>>, G extends Pipable<Out<F>>, H extends Pipable<Out<G>>, I extends Pipable<Out<H>>, J extends Pipable<Out<I>>, K extends Pipable<Out<J>>, L extends Pipable<Out<K>>, M extends Pipable<Out<L>>, N extends Pipable<Out<M>>, O extends Pipable<Out<N>>, P extends Pipable<Out<O>>, Q extends Pipable<Out<P>>, R extends Pipable<Out<Q>>, S extends Pipable<Out<R>>, T extends Pipable<Out<S>>, U extends Pipable<Out<T>>, V extends Pipable<Out<U>>, W extends Pipable<Out<V>>, X extends Pipable<Out<W>>, Y extends Pipable<Out<X>>, Z extends Pipable<Out<Y>>>(...args: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]): Out<Z>;
};