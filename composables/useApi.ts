import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { UseFetchOptions } from "nuxt/app";
import type { FetchError } from "ofetch";

export interface FetchErrorResponse {
  message: string;
}

interface UseApiOptions<TData> extends Omit<UseFetchOptions<TData>, "default"> {
  default: () => TData | Ref<TData> | null;
}

export function useAPI<TData>(
  url: string | (() => string),
  options?: UseApiOptions<TData>,
) {
  const fetch = useNuxtApp().$api as $Fetch<
    unknown | TData,
    NitroFetchRequest
  >;

  const opts = options || {};

  return useFetch<TData, FetchError<FetchErrorResponse>>(url, {
    ...opts,
    $fetch: fetch,
    server: false,
  });
}
