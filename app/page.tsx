'use client';

import { useCookies } from 'next-client-cookies';
import { MouseEvent } from 'react';

export default function Home() {
  // uncomment to disable compiler on this component
  // 'use no memo';

  const cookies = useCookies();

  const handleClick = (e: MouseEvent) => {
    cookies.set('date', new Date().toISOString());
  };

  return (
    <div>
      <p>Cookie value: {cookies.get('date')}</p>
      <button onClick={handleClick}>Set cookie</button>
    </div>
  );
}
