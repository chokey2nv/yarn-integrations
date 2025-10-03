import { useState, useEffect, useCallback } from "react";

export interface IPaginateRequest {
  limit: number;
  skip: number;
}

export interface UsePaginationOptions<T> {
  limit: number;
  fetcher: (pagination: IPaginateRequest) => Promise<T[]>;
  deps?: any[]; // dependencies that trigger reload (e.g. search/filter)
  mergeKey?: keyof T; // optional unique key to deduplicate items
}

export function usePagination<T>({
  limit,
  fetcher,
  deps = [],
  mergeKey,
}: UsePaginationOptions<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // internal fetch
  const getItems = useCallback(
    async (skip: number, isRefresh = false) => {
      if (loading) return;
      if (!isRefresh && !hasMore) return;

      if (isRefresh) {
        setRefreshing(true);
        setHasMore(true);
      } else {
        setLoading(true);
      }

      try {
        const result = await fetcher({ limit, skip });

        setItems((prev) => {
          if (isRefresh) return result;

          const combined = [...prev, ...result];
          if (mergeKey) {
            const map = new Map<any, T>();
            combined.forEach((item: any) => {
              map.set(item[mergeKey], item);
            });
            return Array.from(map.values());
          }
          return combined;
        });

        setSkip(skip);
        setHasMore(result.length === limit);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [limit, fetcher, hasMore, loading, mergeKey]
  );

  // load more
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      getItems(skip + limit);
    }
  }, [skip, limit, hasMore, loading, getItems]);

  // refresh
  const reload = useCallback(() => {
    getItems(0, true);
  }, [getItems]);

  // reload on deps change
  useEffect(() => {
    reload();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    items,
    loading,
    refreshing,
    hasMore,
    reload,
    loadMore,
  };
}
