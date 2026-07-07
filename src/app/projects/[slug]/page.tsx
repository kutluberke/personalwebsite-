export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Project: {slug}</h1>
    </main>
  );
}
