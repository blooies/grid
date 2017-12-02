export default function generateSession() {
  let session = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 10; i++) {
    session += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return session;
}
