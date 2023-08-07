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
const SvgTodo = memo(function ({
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
        d="M8.324 8c0-1.475 1.2-2.675 2.675-2.675 1.475 0 2.675 1.2 2.675 2.675 0 1.475-1.2 2.675-2.675 2.675A2.678 2.678 0 0 1 8.324 8Z"
        fill="#1ABCFE"
      />
      <path
        d="M3 13.325c0-1.475 1.2-2.675 2.675-2.675h2.65v2.675C8.325 14.8 7.125 16 5.65 16 4.175 16 3 14.8 3 13.325Z"
        fill="#0ACF83"
      />
      <path
        d="M8.324 0v5.325H11c1.475 0 2.675-1.2 2.675-2.675C13.674 1.175 12.474 0 11 0H8.324Z"
        fill="#FF7262"
      />
      <path
        d="M3 2.675C3 4.15 4.2 5.35 5.675 5.35h2.65V0H5.65C4.175 0 3 1.2 3 2.675Z"
        fill="#F24E1E"
      />
      <path
        d="M3 8c0 1.475 1.2 2.675 2.675 2.675h2.65v-5.35H5.65C4.175 5.325 3 6.525 3 8Z"
        fill="#A259FF"
      />
    </svg>
  )
})
SvgTodo.displayName = 'Todo'
export default SvgTodo
