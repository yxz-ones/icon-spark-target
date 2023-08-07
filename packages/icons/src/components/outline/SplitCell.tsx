import classNames from 'classnames'
import * as React from 'react'
import { SVGProps, memo } from 'react'
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
const SvgSplitCell = memo(function ({
  className,
  color = 'currentColor',
  fontSize,
  highlight,
  nonScalingStroke = true,
  style,
  strokeWidth = 2,
  ...props
}: IconProps) {
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
      <path
        d="M14.5 11.5v2a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-2M1.5 4.5v-2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2"
        stroke="#2D2D2E"
      />
      <path d="m4.5 11-3-3 3-3M11.5 11l3-3-3-3" stroke="#2D2D2E" strokeLinejoin="round" />
      <path d="M2 8h5M14 8H9" stroke="#2D2D2E" />
    </svg>
  )
})
SvgSplitCell.displayName = 'SplitCell'
export default SvgSplitCell
