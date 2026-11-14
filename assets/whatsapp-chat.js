(() => {
  const css = `
    .micsig-whatsapp-float{position:fixed;right:24px;bottom:24px;z-index:9999;display:flex;align-items:center;gap:10px;padding:12px 17px;border-radius:999px;background:#20c768;color:#fff;text-decoration:none;font:600 15px/1.2 system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 8px 24px #102a1f40;transition:transform .18s ease,box-shadow .18s ease}
    .micsig-whatsapp-float:hover{transform:translateY(-3px);box-shadow:0 12px 30px #102a1f52}
    .micsig-whatsapp-float:focus-visible{outline:3px solid #122033;outline-offset:4px}
    .micsig-whatsapp-float svg{display:block;width:25px;height:25px;flex:none;fill:currentColor}
    @media(max-width:600px){.micsig-whatsapp-float{right:16px;bottom:16px;width:56px;height:56px;padding:0;justify-content:center}.micsig-whatsapp-float span{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}}
    @media(prefers-reduced-motion:reduce){.micsig-whatsapp-float{transition:none}}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const chatUrl = new URL('https://wa.me/919654109754');
  chatUrl.searchParams.set('text', 'We have a requirement for Micsig Product');
  const link = document.createElement('a');
  link.className = 'micsig-whatsapp-float';
  link.href = chatUrl.toString();
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Chat with Vianova on WhatsApp about a Micsig product');
  link.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.02 3C8.85 3 3.02 8.78 3.02 15.9c0 2.27.6 4.49 1.74 6.45L3 29l6.85-1.79a13.1 13.1 0 0 0 6.17 1.55h.01C23.2 28.76 29 22.98 29 15.86 29 8.75 23.19 3 16.02 3Zm0 23.53a10.9 10.9 0 0 1-5.55-1.51l-.4-.23-4.06 1.06 1.08-3.94-.26-.41a10.73 10.73 0 0 1-1.65-5.7c0-5.98 4.89-10.84 10.9-10.84 2.91 0 5.65 1.13 7.7 3.18a10.7 10.7 0 0 1 3.2 7.65c0 5.98-4.9 10.84-10.96 10.84Zm5.98-8.12c-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.16-.22.32-.85 1.07-1.04 1.29-.19.21-.38.24-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.86-1.64-1.92-1.83-2.25-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.32.33-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.77-1.01-2.42-.27-.63-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.35c.16.22 2.3 3.49 5.57 4.89.78.33 1.39.53 1.86.68.78.25 1.49.21 2.05.13.63-.1 1.95-.8 2.23-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z"/></svg><span>Chat with us</span>';
  document.body.appendChild(link);
})();