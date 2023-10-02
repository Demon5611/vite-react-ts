import React from 'react';

export default function Second(): JSX.Element {
  function getCurrentTime(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
    return (
      <div>
        <p>#2</p>
        <p>Текущее время: </p>
        <h1>{getCurrentTime()}</h1>
        <img src="https://w.forfun.com/fetch/75/756ac8864b07aaf0393073b2741213ad.jpeg" alt="#" />
      </div>
    );
  };

