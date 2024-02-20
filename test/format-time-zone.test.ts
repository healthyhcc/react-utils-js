import { describe, expect, test } from '@jest/globals';
import { formatTimeZone } from '../src';

describe('format time zone test', () => {
  test('success test', () => {
    const result = formatTimeZone('2023-05-13T00:30:00.000Z');

    expect(typeof result.timezone).toBe('string');
    expect(result.dayjsTime.isValid()).toBe(true);

    expect(formatTimeZone(undefined).timezone).toBe('CST');
    expect(formatTimeZone(undefined).dayjsTime.isValid()).toBe(true);

    expect(formatTimeZone('2023-07-13T00:30:00.000Z').timezone).toEqual('CST');
    expect(result.dayjsTime.isValid()).toBe(true);
  });

  // it('should return the default timezone and dayjsTime for an undefined input', () => {

  // });

  // it('should handle summer time correctly', () => {

  // });

  // it('should handle standard time correctly', () => {
  //   const result = formatTimeZone('2023-12-13T00:30:00.000Z');

  //   expect(result.timezone).toBe('PST');
  //   expect(result.dayjsTime.isValid()).toBe(true);
  // });
});
