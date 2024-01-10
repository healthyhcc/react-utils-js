import { describe, expect, test } from '@jest/globals';
import { formatFinance } from '../src';

describe('format finance test', () => {
  test('success test', () => {
    expect(formatFinance()).toBe(undefined);
    expect(formatFinance(1000000)).toBe('1,000,000');
    expect(formatFinance('2000000')).toBe('2,000,000');
  });
});
