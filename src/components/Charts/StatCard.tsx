export default function StatCard({ title, value }: { title?: string; value?: string | number }) {
  return (
    <div className="flex flex-col border rounded-lg p-4 justify-between gap-2 md:flex-1">
      <h1 className="text-lg">{title}</h1>
      <div className="self-end text-2xl font-semibold text-[#6750A4]">{value}</div>
    </div>
  )
}
