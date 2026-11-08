import {timingSafeEqual} from 'node:crypto';

/** Compares two secrets without leaking, through timing, how many leading characters matched. */
export function tokensMatch(given: string | undefined, expected: string | undefined): boolean {
  if (!given || !expected) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
