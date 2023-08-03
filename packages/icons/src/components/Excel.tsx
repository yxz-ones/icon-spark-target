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
const SvgExcel = memo(function ({
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
        d="M2.5 2.5v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5.414a1 1 0 0 0-.293-.707l-2.914-2.914a1 1 0 0 0-.707-.293H3.5a1 1 0 0 0-1 1Z"
        fill="#D7F7EA"
        stroke="#11AD6F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 1.5v3a1 1 0 0 0 1 1h3" stroke="#11AD6F" strokeLinejoin="round" />
      <path
        d="M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 12V8Z"
        fill="#94E3C3"
        stroke="#11AD6F"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 9.75h5.5V12a.25.25 0 0 1-.25.25h-5a.25.25 0 0 1-.25-.25V9.75Z"
        fill="#D7F7EA"
        stroke="#11AD6F"
      />
      <path d="M4.5 9.5h7M7.5 8v4.5" stroke="#11AD6F" strokeLinejoin="round" />
    </svg>
  )
})
SvgExcel.displayName = 'Excel'
export default SvgExcel
