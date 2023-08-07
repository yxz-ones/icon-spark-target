import classNames from 'classnames'
import * as React from 'react'
import { SVGProps, memo, useMemo } from 'react'
interface IconProps extends SVGProps<SVGSVGElement> {
  /** 图标的类名 */
  className?: string;
  /** 图标颜色，也可以通过"CSS"的"color"属性修改 */
  color?: string;
  /** 图标的尺寸 */
  fontSize?: number | string;
  /** 高亮色，仅双色图标有效 */
  highlight?: string;
  /** 是否阻止图标的轮廓宽度随图标的缩放而改变 */
  nonScalingStroke?: boolean;
  /** 图标轮廓的宽度，可选值为"1" "2" */
  strokeWidth?: 1 | 2;
  /** 图标的行内样式 */
  style?: React.CSSProperties;
}
const SvgUnlink = memo(function ({
  className,
  color = 'currentColor',
  fontSize,
  highlight,
  nonScalingStroke = true,
  style,
  strokeWidth = 2,
  ...props
}: IconProps) {
  const dynamicID = useMemo < string > (() => Math.random().toString(36).slice(-6), [])
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        'ones-icon',
        {
          'ones-icon-non-scaling-stroke': nonScalingStroke,
        },
        className
      )}
      style={Object.assign(
        {
          fontSize,
        },
        style
      )}
      strokeWidth={strokeWidth}
    >
      <g clipPath={`url(#prefix_${dynamicID}_a)`} stroke="#2D2D2E">
        <path d="m12.808 11.111 2.732.732M11.847 15.538l-.732-2.732M4.889 3.192 4.157.46M.462 4.153l2.732.732M10.531 5.468l-5.063 5.064M6.943 3.57l.633-.634a3.88 3.88 0 0 1 5.486 5.486l-.633.633m-3.376 3.376-.633.633a3.88 3.88 0 1 1-5.486-5.486l.633-.633" />
      </g>
      <defs>
        <clipPath id={`prefix_${dynamicID}_a`}>
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
SvgUnlink.displayName = 'Unlink'
export default SvgUnlink
