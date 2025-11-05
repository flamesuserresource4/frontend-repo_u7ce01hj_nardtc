import Spline from '@splinetool/react-spline';

export default function AuthIllustration() {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/k3vzWf8TfEDJKl71/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-6 left-6 right-6 rounded-xl bg-white/70 backdrop-blur border border-gray-200 p-4">
        <p className="text-sm font-medium text-gray-800">Secure Access</p>
        <p className="text-xs text-gray-600">A modern, encrypted gateway to Telkom University resources.</p>
      </div>
    </div>
  );
}
