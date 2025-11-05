import AuthHeader from './components/AuthHeader';
import AuthIllustration from './components/AuthIllustration';
import AuthForm from './components/AuthForm';
import AuthFooter from './components/AuthFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <AuthHeader />
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Form Side */}
          <div className="flex items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Akses Koleksi Digital Kapan Saja</h2>
              <p className="mt-1 text-sm text-gray-600">Masuk atau daftar untuk mengakses buku, jurnal, dan bahan ajar.</p>
              <div className="mt-6">
                <AuthForm />
              </div>
            </div>
          </div>
          {/* Illustration Side */}
          <div className="h-[520px] rounded-2xl border border-gray-200 overflow-hidden">
            <AuthIllustration />
          </div>
        </section>
        <div className="mt-12">
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}
