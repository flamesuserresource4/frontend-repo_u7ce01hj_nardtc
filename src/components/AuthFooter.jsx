export default function AuthFooter() {
  return (
    <div className="text-xs text-gray-500">
      <p>
        © {new Date().getFullYear()} Telkom University Open Library • Designed for secure, accessible academic resources.
      </p>
      <p className="mt-1">Need help? Contact library@telkomuniv.ac.id</p>
    </div>
  );
}
