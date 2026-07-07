export function StaticFallback() {
  return (
    <div
      aria-hidden
      className="flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div className="h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}
