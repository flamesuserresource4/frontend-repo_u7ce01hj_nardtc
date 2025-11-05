import { useMemo, useState } from 'react';
import { Download, FileText, ImagePlus, Loader2, Search, ShieldCheck, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';

export default function PageContent({ page, searchTerm }) {
  const content = useMemo(() => page, [page]);
  return (
    <main className="flex-1 min-h-[calc(100dvh-4rem)] bg-gray-50/60">
      <div className="mx-auto max-w-7xl p-4 sm:p-6">
        {content === 'dashboard' && <Dashboard searchTerm={searchTerm} />}
        {content === 'collections' && <Collections searchTerm={searchTerm} />}        
        {content === 'upload' && <UploadAndMonitor />}        
        {content === 'reports' && <Reports />}        
        {content === 'profile' && <Profile />}        
        {content === 'help' && <Help />}        
      </div>
    </main>
  );
}

function Dashboard({ searchTerm }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Welcome, Student!</h2>
        <p className="text-sm text-gray-600">Access digital books, journals, and teaching materials. {searchTerm ? `Results for "${searchTerm}"` : ''}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Resources" value="128,532" subtitle="All collections" />
        <StatCard title="Trending Journals" value="289" accent="#a11f3a" />
        <StatCard title="New E-Books" value="74" accent="#b9384f" />
        <StatCard title="Your Reading Time" value="12h" subtitle="This week" accent="#db546a" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-gray-900">Quick Access</h3>
            <button className="text-sm text-[#7a001f] hover:underline">See all</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Trending Journals','New E-Books','Top Teaching Materials','Recommended For You','Saved Lists','Faculty Picks'].map((t,i)=> (
              <QuickCard key={i} title={t} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <h3 className="font-medium text-gray-900 mb-3">Announcements</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><ShieldCheck className="text-[#7a001f]" size={18}/> Two-factor login now available.</li>
            <li className="flex gap-3"><TrendingUp className="text-[#7a001f]" size={18}/> New dataset collection for AI research.</li>
            <li className="flex gap-3"><FileText className="text-[#7a001f]" size={18}/> Library hours updated for finals week.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-4 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-gray-900">Recent Activity</h3>
            <button className="text-sm text-gray-600 hover:text-gray-900">View history</button>
          </div>
          <ActivityList />
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <h3 className="font-medium text-gray-900 mb-3">Reading Progress</h3>
          <div className="h-40 bg-gray-50 rounded-lg border border-gray-100 flex items-end gap-2 p-2">
            {[30,55,40,70,65,80,50].map((h,i)=> (
              <div key={i} className="flex-1 bg-[#7a001f]/70 rounded-t" style={{height:`${h}%`}} />
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">Weekly pages read</p>
        </div>
      </div>
    </div>
  );
}

function QuickCard({ title }) {
  return (
    <div className="group rounded-lg border border-gray-200 p-4 hover:shadow-sm transition bg-white">
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-500 mt-1">Explore curated items</p>
      <button className="mt-3 text-xs text-[#7a001f] group-hover:underline">Open</button>
    </div>
  );
}

function ActivityList() {
  const items = [
    { title: 'Neural Networks and Deep Learning', type: 'E-Book', action: 'Viewed' },
    { title: 'Journal of Telecommunications 2024-07', type: 'Journal', action: 'Downloaded' },
    { title: 'Data Structures Lecture Notes', type: 'Teaching Material', action: 'Viewed' },
  ];
  return (
    <ul className="divide-y divide-gray-100">
      {items.map((it, idx)=> (
        <li key={idx} className="py-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">{it.title}</p>
            <p className="text-xs text-gray-500">{it.type}</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{it.action}</span>
        </li>
      ))}
    </ul>
  );
}

function Collections({ searchTerm }) {
  const [filter, setFilter] = useState('All');
  const data = [
    { t: 'Digital Signal Processing', y: 2023, k: ['signal','telecom'], type: 'Book' },
    { t: '5G NR Protocols', y: 2022, k: ['5g','network'], type: 'Book' },
    { t: 'IoT in Smart Campus', y: 2024, k: ['iot','campus'], type: 'Journal' },
    { t: 'Data Mining Course Slides', y: 2024, k: ['data','slides'], type: 'Teaching Material' },
  ];
  const filtered = data.filter(item => (filter === 'All' || item.type === filter) && (!searchTerm || item.t.toLowerCase().includes(searchTerm.toLowerCase())));
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Browse Collections</h2>
        <div className="flex items-center gap-2">
          {['All','Book','Journal','Teaching Material'].map(f => (
            <button key={f} onClick={()=> setFilter(f)} className={`text-sm px-3 py-1.5 rounded-md border ${filter===f? 'bg-[#7a001f] text-white border-[#7a001f]':'bg-white text-gray-700 border-gray-200'}`}>{f}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i)=> (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-gray-900">{item.t}</p>
            <p className="text-xs text-gray-500">{item.type} • {item.y}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-2">
                {item.k.map((tag,idx)=> <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{tag}</span>)}
              </div>
              <button className="text-xs text-[#7a001f] hover:underline">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UploadAndMonitor() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="font-medium text-gray-900 mb-3">Upload New Content</h3>
        <form className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Input label="Title" placeholder="Enter title" />
            <Input label="Author(s)" placeholder="e.g., A. Setiawan, B. Dewi" />
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <Input label="Year" placeholder="2024" type="number" />
            <Select label="Type" options={["Book","Journal","Teaching Material"]} />
            <Input label="Keywords" placeholder="comma, separated, tags" />
          </div>
          <TextArea label="Abstract" placeholder="Short abstract or summary" />
          <FileDrop />
          <div className="flex items-center gap-3">
            <button type="button" className="px-4 py-2 rounded-md bg-[#7a001f] text-white text-sm">Upload</button>
            <button type="reset" className="px-4 py-2 rounded-md border border-gray-200 text-sm">Reset</button>
          </div>
        </form>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="font-medium text-gray-900 mb-3">Monitoring</h3>
        <ul className="divide-y divide-gray-100 text-sm">
          {[{t:'Graph Neural Networks', s:'Pending Review'},{t:'IoT in Healthcare', s:'Published'},{t:'Signal Processing Lab Guide', s:'Processing'}].map((r,i)=> (
            <li key={i} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{r.t}</p>
                <p className="text-xs text-gray-500">Uploaded just now</p>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full border ${r.s==='Published' ? 'bg-green-50 text-green-700 border-green-200' : r.s==='Pending Review' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>{r.s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <StatCard title="Most Borrowed" value="Network Security" subtitle="This month" />
        <StatCard title="Popular Searches" value="AI" subtitle="Top keyword" accent="#a11f3a" />
        <StatCard title="Collection Growth" value="+342" subtitle="Items added" accent="#b9384f" />
        <StatCard title="Active Users" value="4,128" subtitle="Last 30 days" accent="#db546a" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Most Read Books">
          <Bars values={[70,55,80,45,60,75]} labels={['DSA','Signals','5G','IoT','AI','DB']} />
        </ChartCard>
        <ChartCard title="User Activity Trends">
          <LineMock />
        </ChartCard>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-900">Summary</h3>
          <div className="flex items-center gap-2">
            <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
            <button className="text-sm px-3 py-1.5 rounded-md border border-gray-200 flex items-center gap-2"><Download size={16}/> Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Metric','Value','Change','Notes'].map((h)=> <th key={h} className="text-left px-3 py-2 font-medium text-gray-700">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-3 py-2">Downloads</td>
                <td className="px-3 py-2">12,430</td>
                <td className="px-3 py-2 text-green-600">+8%</td>
                <td className="px-3 py-2">Midterms spike</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Average Session</td>
                <td className="px-3 py-2">9m 12s</td>
                <td className="px-3 py-2 text-green-600">+3%</td>
                <td className="px-3 py-2">Improved search</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Search Queries</td>
                <td className="px-3 py-2">34,120</td>
                <td className="px-3 py-2 text-red-600">-2%</td>
                <td className="px-3 py-2">Semester break</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#7a001f] to-[#a11f3a] text-white flex items-center justify-center text-2xl font-semibold">TU</div>
        <h3 className="mt-3 text-lg font-semibold text-gray-900">Alexandra Putri</h3>
        <p className="text-sm text-gray-600">Student • 1302201234</p>
        <div className="mt-4 space-y-2 text-sm">
          <p><span className="text-gray-500">Email:</span> alexandra@telkomuniv.ac.id</p>
          <p><span className="text-gray-500">Notifications:</span> Enabled</p>
        </div>
      </div>
      <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="font-medium text-gray-900 mb-3">Settings</h3>
        <form className="grid sm:grid-cols-2 gap-3">
          <Input label="Full Name" defaultValue="Alexandra Putri" />
          <Input label="Email" defaultValue="alexandra@telkomuniv.ac.id" />
          <Input label="Change Password" type="password" placeholder="••••••••" />
          <div className="sm:col-span-2 flex items-center justify-end gap-3 mt-2">
            <button className="px-4 py-2 rounded-md border border-gray-200 text-sm">Cancel</button>
            <button className="px-4 py-2 rounded-md bg-[#7a001f] text-white text-sm">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Help() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="font-medium text-gray-900 mb-2">About Open Library</h3>
        <p className="text-sm text-gray-600">A unified digital library platform designed to provide flexible access to academic resources across Telkom University. Browse, search, and download resources anytime and anywhere.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <h4 className="font-medium text-gray-900 mb-2">FAQs</h4>
          <ul className="space-y-3 text-sm">
            <li><span className="font-medium">How do I download an item?</span><br/><span className="text-gray-600">Open the collection detail and click Download. You may need to sign in.</span></li>
            <li><span className="font-medium">Who can upload?</span><br/><span className="text-gray-600">Lecturers and Library Staff can upload materials. Students can suggest items.</span></li>
            <li><span className="font-medium">Is my data secure?</span><br/><span className="text-gray-600">We use modern authentication and encryption to safeguard access.</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <h4 className="font-medium text-gray-900 mb-2">Contact</h4>
          <p className="text-sm text-gray-600">Email: library@telkomuniv.ac.id<br/>Phone: (022) 123-4567<br/>Campus: Gedung Perpustakaan, Telkom University</p>
        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-xs text-gray-600">{label}</span>
      <input {...props} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a001f]/20 focus:border-[#7a001f]" />
    </label>
  );
}

function TextArea({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-xs text-gray-600">{label}</span>
      <textarea {...props} rows={4} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a001f]/20 focus:border-[#7a001f]" />
    </label>
  );
}

function Select({ label, options }) {
  return (
    <label className="block">
      <span className="text-xs text-gray-600">{label}</span>
      <select className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a001f]/20 focus:border-[#7a001f]">
        {options.map((o)=> <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function FileDrop() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50">
      <div className="mx-auto w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-2">
        {loading ? <Loader2 className="animate-spin text-gray-500" /> : <ImagePlus className="text-[#7a001f]" />}
      </div>
      <p className="text-sm text-gray-700">Drag & drop files here, or <button type="button" className="text-[#7a001f] underline" onClick={()=> setLoading(true)}>browse</button></p>
      <p className="text-xs text-gray-500 mt-1">PDF, DOCX, or ZIP up to 50MB</p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Search size={14}/> Filter
        </div>
      </div>
      {children}
    </div>
  );
}

function Bars({ values, labels }) {
  return (
    <div className="h-48 bg-gray-50 rounded-lg border border-gray-100 flex items-end gap-3 p-3">
      {values.map((v,i)=> (
        <div key={i} className="flex-1 flex flex-col items-center">
          <div className="w-full bg-[#7a001f]/80 rounded-t" style={{height:`${v}%`}} />
          <span className="mt-1 text-[10px] text-gray-600">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

function LineMock() {
  return (
    <div className="h-48 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden">
      <svg viewBox="0 0 100 50" className="w-full h-full">
        <polyline fill="none" stroke="#7a001f" strokeWidth="2" points="0,35 15,28 30,32 45,20 60,26 75,18 90,24 100,15" />
        <polyline fill="none" stroke="#b9384f" strokeWidth="1" points="0,40 15,34 30,38 45,28 60,32 75,25 90,30 100,22" />
      </svg>
    </div>
  );
}
