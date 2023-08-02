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
const SvgQuote = memo(function ({
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
        d="M3 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3H4a1 1 0 0 1-1-1V5ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h-3a1 1 0 0 1-1-1V5Z"
        fill="#2D2D2E"
      />
      <path d="M6.5 5v4.5a2 2 0 0 1-2 2H3M13.5 5v4.5a2 2 0 0 1-2 2H10" stroke="#2D2D2E" />
    </svg>
  )
})
SvgQuote.displayName = 'Quote'
export default SvgQuote
