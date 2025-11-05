import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Hash, ChevronRight } from 'lucide-react';

export default function AuthForm() {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-md">
      {/* Toggle */}
      <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden mb-6">
        <button
          className={`px-4 py-2 text-sm font-medium ${mode==='login' ? 'bg-[#7a001f] text-white' : 'bg-white text-gray-700'}`}
          onClick={() => setMode('login')}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${mode==='register' ? 'bg-[#7a001f] text-white' : 'bg-white text-gray-700'}`}
          onClick={() => setMode('register')}
        >
          Register
        </button>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {mode === 'login' ? (
          <>
            <h2 className="text-lg font-semibold text-gray-900">Masuk ke Open Library</h2>
            <p className="text-sm text-gray-600 mb-4">Gunakan akun Telkom University Anda</p>
            <form className="space-y-4">
              <Field label="Username / Email">
                <IconInput icon={<Mail size={16} className="text-gray-400"/>} type="email" placeholder="you@telkomuniversity.ac.id" />
              </Field>
              <Field label="Password">
                <PasswordInput show={show} setShow={setShow} placeholder="••••••••" />
              </Field>
              <div className="flex items-center justify-between text-sm">
                <a className="text-[#7a001f] hover:underline" href="#">Forgot Password?</a>
                <a className="text-gray-600 hover:underline" href="#" onClick={(e)=>{e.preventDefault(); setMode('register');}}>Daftar Akun Baru</a>
              </div>
              <button type="button" className="w-full inline-flex items-center justify-center gap-2 bg-[#7a001f] text-white rounded-md px-4 py-2.5 text-sm font-medium hover:brightness-110">
                Masuk <ChevronRight size={16} />
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">Akses khusus untuk Civitas Akademika Telkom University (Mahasiswa, Dosen, Staf).</p>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-gray-900">Daftar Akun Open Library</h2>
            <p className="text-sm text-gray-600 mb-4">Gunakan email institusi @telkomuniversity.ac.id</p>
            <form className="space-y-4">
              <Field label="Nama Lengkap">
                <IconInput icon={<User size={16} className="text-gray-400"/>} placeholder="Nama sesuai identitas" />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="NIM/NIP">
                  <IconInput icon={<Hash size={16} className="text-gray-400"/>} placeholder="1302xxxxxxxx" />
                </Field>
                <Field label="Peran">
                  <select className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a001f]/20 focus:border-[#7a001f]">
                    <option>Mahasiswa</option>
                    <option>Dosen</option>
                    <option>Staf</option>
                  </select>
                </Field>
              </div>
              <Field label="Email Institusi">
                <IconInput icon={<Mail size={16} className="text-gray-400"/>} type="email" placeholder="nama@telkomuniversity.ac.id" />
              </Field>
              <Field label="Password">
                <PasswordInput show={show} setShow={setShow} placeholder="Minimal 8 karakter" />
              </Field>
              <button type="button" className="w-full inline-flex items-center justify-center gap-2 bg-[#7a001f] text-white rounded-md px-4 py-2.5 text-sm font-medium hover:brightness-110">
                Buat Akun <ChevronRight size={16} />
              </button>
              <p className="text-sm text-gray-600 text-center">Sudah punya akun? <button className="text-[#7a001f] hover:underline" onClick={()=> setMode('login')}>Masuk</button></p>
            </form>
            <p className="mt-4 text-xs text-gray-500">Pendaftaran dikhususkan untuk Civitas Akademika Telkom University. Akses tamu tersedia melalui permintaan perpustakaan.</p>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs text-gray-600">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function IconInput({ icon, ...props }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
      <input {...props} className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a001f]/20 focus:border-[#7a001f]" />
    </div>
  );
}

function PasswordInput({ show, setShow, ...props }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2"><Lock size={16} className="text-gray-400"/></span>
      <input {...props} type={show ? 'text' : 'password'} className="w-full pl-9 pr-9 py-2 rounded-md border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a001f]/20 focus:border-[#7a001f]" />
      <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500" onClick={()=> setShow(s=>!s)} aria-label={show ? 'Hide password' : 'Show password'}>
        {show ? <EyeOff size={16}/> : <Eye size={16}/>}      
      </button>
    </div>
  );
}
