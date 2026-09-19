'use client';

import React from 'react';

export default function FloatingWhatsApp() {
  const text = encodeURIComponent('Hello Kailash Parbat! I would like to inquire about table booking and menu at your Panampilly Nagar, Kochi restaurant.');
  return (
    <div className="icon-whatsapp1">
      <a
        href={`https://api.whatsapp.com/send?phone=919847000000&text=${text}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Kailash Parbat Kochi on WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.07c-.24.68-1.2 1.28-1.84 1.36-.59.08-1.35.11-2.18-.16-.54-.17-1.23-.4-2.13-.79-3.77-1.64-6.22-5.47-6.41-5.72-.19-.26-1.54-2.05-1.54-3.9 0-1.86.97-2.77 1.32-3.15.35-.37.76-.46 1.01-.46.25 0 .5.01.72.02.23.01.54-.09.84.64.32.77 1.09 2.66 1.18 2.86.1.19.16.42.03.68-.13.25-.19.41-.38.63-.19.22-.4.49-.57.66-.19.19-.39.4-.17.78.22.37.98 1.62 2.1 2.62 1.44 1.28 2.66 1.68 3.04 1.87.38.19.6.16.82-.09.22-.26.96-1.12 1.22-1.5.26-.38.52-.32.87-.19.35.13 2.22 1.05 2.6 1.24.38.19.64.29.73.45.09.16.09.93-.15 1.61z" />
        </svg>
      </a>
    </div>
  );
}
