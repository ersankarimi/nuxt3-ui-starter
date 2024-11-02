/**
 * A generic response interface that maps keys to data.
 *
 * @template TData - The type of the data.
 * @template TKey - The type of keys (default is string).
 */
export type Response<TData = unknown, TKey extends string | number = string> = {
  [key in TKey]: TData;
};
