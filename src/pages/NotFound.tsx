import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <meta name="robots" content="noindex" />
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-black text-[var(--text-primary)] mb-4">404</h1>
        <p className="text-lg text-[var(--text-muted)] mb-8">
          This page doesn't exist. If you got here from a link on this site, let me know — it's a bug.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] font-bold hover:bg-[var(--glass-bg-hover)] transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;