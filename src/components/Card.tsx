export default function Card(data: { html: any }) {
  const { html } = data;

  return (
    <div className="flex h-full w-full flex-col rounded-lg bg-cardBackground p-4 shadow-lg">
      <div className="h-full">{html}</div>
    </div>
  );
}
