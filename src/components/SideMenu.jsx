import { Home, Library, Upload, BarChart3, User, HelpCircle, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: Home },
  { key: 'collections', label: 'Browse Collections', icon: Library },
  { key: 'upload', label: 'Upload & Monitor', icon: Upload },
  { key: 'reports', label: 'Reports', icon: BarChart3 },
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'help', label: 'Help', icon: HelpCircle },
];

export default function SideMenu({ current, onChange }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-200 border-r border-gray-200 bg-white h-[calc(100dvh-4rem)] sticky top-16`}> 
      <div className="p-3 flex items-center justify-between">
        <span className={`text-xs font-medium text-gray-500 ${collapsed ? 'opacity-0 pointer-events-none' : ''}`}>Navigation</span>
        <button
          className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600"
          onClick={() => setCollapsed((s) => !s)}
          aria-label="Toggle menu"
        >
          <ChevronLeft className={`${collapsed ? 'rotate-180' : ''} transition-transform`} size={18} />
        </button>
      </div>
      <nav className="px-2 py-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = current === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className={`${active ? 'bg-[#7a001f]/10 text-[#7a001f] border-[#7a001f]/20' : 'text-gray-700 hover:bg-gray-50 border-transparent'} w-full flex items-center gap-3 px-3 py-2.5 rounded-md border`}
            >
              <Icon size={18} />
              <span className={`${collapsed ? 'hidden' : 'block'} text-sm font-medium`}>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="mt-4 px-3">
        <div className={`rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-3 ${collapsed ? 'hidden' : 'block'}`}>
          <p className="text-xs text-gray-500 mb-1">Access resources</p>
          <p className="text-sm font-medium text-gray-800">Anytime, anywhere</p>
        </div>
      </div>
    </aside>
  );
}
