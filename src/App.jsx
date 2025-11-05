import { useState } from 'react';
import TopNav from './components/TopNav';
import SideMenu from './components/SideMenu';
import PageContent from './components/PageContent';

export default function App() {
  const [page, setPage] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <TopNav onSearch={setSearchTerm} userName="Alexandra" />
      <div className="flex">
        <SideMenu current={page} onChange={setPage} />
        <PageContent page={page} searchTerm={searchTerm} />
      </div>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Telkom University Open Library — Prototype</p>
          <p>Design palette: Maroon, White, Gray • Responsive • Accessible</p>
        </div>
      </footer>
    </div>
  );
}
