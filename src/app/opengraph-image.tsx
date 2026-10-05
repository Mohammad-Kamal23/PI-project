import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

// The preview card shown when the site is shared (LinkedIn, X, WhatsApp, ...), generated from the site data.
export const alt = `${site.name} - ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 80, background: '#060908', color: '#e7eeeb', fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#34d399', letterSpacing: 4 }}>{site.role.toUpperCase()}</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 34, color: '#98a7a1', marginTop: 24 }}>{site.focus}</div>
        <div style={{ fontSize: 26, color: '#66746f', marginTop: 48 }}>{`${site.location} · ${site.github.replace('https://', '')}`}</div>
      </div>
    ),
    size,
  );
}
