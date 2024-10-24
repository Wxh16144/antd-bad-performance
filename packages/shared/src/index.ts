import * as React from 'react'
import { version } from 'antd'
import { AntDesignOutlined, GithubFilled } from '@ant-design/icons'

type AnyObject = Record<string, any>;

export function cartesian<T extends AnyObject>(...args: T[][]): (T & AnyObject)[][] {
  const r: (T & AnyObject)[][] = [];
  const max = args.length - 1;

  function helper(arr: (T & AnyObject)[], i: number): void {
    for (let j = 0, l = args[i].length; j < l; j++) {
      const a: (T & AnyObject)[] = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i === max) {
        r.push(a);
      } else {
        helper(a, i + 1);
      }
    }
  }

  helper([], 0);
  return r;
}

const isV5 = version.startsWith('5');
const isV4 = String(version).startsWith('4');

/** antd v5 */
export const colors = [
  { color: 'default' },
  { color: 'primary' },
  { color: 'danger' }
];

/** antd v5 */
export const variants = [
  { variant: "solid" },
  { variant: "outlined" },
  { variant: "dashed" },
  { variant: "filled" },
  { variant: "text" },
  { variant: "link" }
];

/** antd v4, v5 */
export const sizes = [
  { size: 'small' },
  { size: 'medium' },
  { size: 'large' }
];

/** antd v4, v5 */
export const disabled = [{ disabled: true }, { disabled: false }];

/** antd v4, v5 */
export const icons = [
  { icon: void 0 },
  { icon: React.createElement(AntDesignOutlined) },
  { icon: React.createElement(GithubFilled) }
];

/** antd v4 */
export const danger = [{ danger: void 0 }, { danger: true }];
/** antd v4 */
export const types = [
  { type: 'primary' },
  { type: 'default' },
  { type: 'dashed' },
  { type: 'link' },
  { type: 'text' }
];

export const getConfig = (rest?: AnyObject) => {
  const _mergers = {
    // v5
    colors: isV5 ? colors : void 0,
    variants: isV5 ? variants : void 0,

    // v4, v5
    sizes,
    disabled,
    icons,

    // v4
    danger: isV4 ? danger : void 0,
    type: isV4 ? types : void 0,
    ...rest,
  }

  return Object.entries(_mergers).reduce((acc, [key, value]: any[]) => {
    if (value) {
      acc[key] = value
    }
    return acc
  }, {} as AnyObject)
}