import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-faint sm:flex-row sm:items-center sm:px-6">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="sm:ml-auto">
          Built with Next.js ·{' '}
          <a href={site.github} className="underline-offset-4 hover:text-muted hover:underline">GitHub</a> ·{' '}
          <a href={site.linkedin} className="underline-offset-4 hover:text-muted hover:underline">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
