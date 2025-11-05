export default function StatCard({ title, value, subtitle, accent = '#7a001f' }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        {subtitle ? <span className="text-xs text-gray-500">{subtitle}</span> : null}
      </div>
      <div className="mt-4 h-1.5 w-full rounded-full bg-gray-100">
        <div className="h-1.5 rounded-full" style={{ width: '60%', backgroundColor: accent }} />
      </div>
    </div>
  );
}
