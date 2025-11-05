import { Search, Bell, User } from 'lucide-react';

export default function TopNav({ onSearch, userName = 'Guest' }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-[#7a001f] flex items-center justify-center text-white font-bold">TU</div>
          <div className="leading-tight">
            <p className="text-sm text-gray-500">Telkom University</p>
            <h1 className="text-base font-semibold text-gray-900">Open Library</h1>
          </div>
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-2xl mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search books, journals, teaching materials..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7a001f]/20 focus:border-[#7a001f] text-sm"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Notifications">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-[#7a001f] rounded-full" />
          </button>
          <div className="flex items-center gap-2 p-1.5 pr-3 rounded-lg border border-gray-200 hover:border-gray-300">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#7a001f] to-[#a11f3a] text-white flex items-center justify-center">
              <User size={18} />
            </div>
            <span className="text-sm font-medium text-gray-700">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
