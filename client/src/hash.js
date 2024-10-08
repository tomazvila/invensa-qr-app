import { createHash } from 'crypto';

export function getUrlHash() {
  const today = new Date().toISOString().split('T')[0];
  const hash = createHash('sha256').update(today).digest('hex');
  return hash.substring(0, 8);
}
