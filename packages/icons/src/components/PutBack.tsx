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
const SvgPutBack = memo(function ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1.5H5v-1h6v1Zm-8.5 3H0v-1h16v1h-2.5V8h-1V4.5h-9V14a.5.5 0 0 0 .5.5h2v1H4A1.5 1.5 0 0 1 2.5 14V4.5Z"
        fill="#2D2D2E"
      />
      <path d="m11 9 2.5 2.5L11 14" stroke="#2D2D2E" strokeLinejoin="round" />
      <path d="M13 11.5h-2.5a2 2 0 0 0-2 2V15" stroke="#2D2D2E" />
    </svg>
  )
})
SvgPutBack.displayName = 'PutBack'
export default SvgPutBack
