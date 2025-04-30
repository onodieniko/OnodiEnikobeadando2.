import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Kapcsolat</h1>
      <form>
        <input type="text" placeholder="Név" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Üzenet" required />
        <button type="submit">Küldés</button>
      </form>
    </div>
  );
}
