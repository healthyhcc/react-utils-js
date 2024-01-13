import { describe, expect, test } from '@jest/globals';
import { getLangResult } from '../src';

describe('get lang result test', () => {
  test('success test', () => {
    expect(getLangResult('zh')).toBe(undefined);
    expect(getLangResult('zh', undefined, 'test')).toBe('test');
    expect(getLangResult('zh', '测试', undefined)).toBe('测试');
    expect(getLangResult('zh', undefined, undefined)).toBe(undefined);
    expect(
      getLangResult('zh', ['中文', 'Chinese'], ['英文', 'English']),
    ).toEqual(['中文', 'Chinese']);

    expect(getLangResult('en')).toBe(undefined);
    expect(getLangResult('en', undefined, 'test')).toBe('test');
    expect(getLangResult('en', '测试', undefined)).toBe('测试');
    expect(getLangResult('en', undefined, undefined)).toBe(undefined);
    expect(
      getLangResult('en', ['中文', 'Chinese'], ['英文', 'English']),
    ).toEqual(['英文', 'English']);
  });
});
