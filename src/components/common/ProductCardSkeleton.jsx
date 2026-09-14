function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="h-52 animate-pulse bg-surface sm:h-60" />

      <div className="space-y-3 p-3 sm:p-4">
        <div className="h-4 w-20 animate-pulse rounded bg-border" />
        <div className="h-5 w-full animate-pulse rounded bg-border" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-border" />

        <div className="h-5 w-28 animate-pulse rounded bg-border" />

        <div className="h-8 w-24 animate-pulse rounded bg-border" />

        <div className="h-7 w-20 animate-pulse rounded bg-border" />

        <div className="h-10 w-full animate-pulse rounded-lg bg-border" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
