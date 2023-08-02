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
const SvgVideoFile = memo(function ({
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
      viewBox="0 0 32 32"
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
        d="M7 5v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 21.172 3H9a2 2 0 0 0-2 2Z"
        fill="#FFEBE0"
        stroke="#F25A0A"
        strokeLinecap="round"
      />
      <path d="M21 3v6a2 2 0 0 0 2 2h6" stroke="#F25A0A" strokeLinejoin="round" />
      <rect
        x={3}
        y={12}
        width={14}
        height={12}
        rx={1}
        fill="#FFEBE0"
        stroke="#F25A0A"
        strokeLinejoin="round"
      />
      <path
        d="M12.48 17.132a1 1 0 0 1 0 1.736l-3.984 2.277A1 1 0 0 1 7 20.277v-4.554a1 1 0 0 1 1.496-.868l3.985 2.277Z"
        fill="#F25A0A"
      />
    </svg>
  )
})
SvgVideoFile.displayName = 'VideoFile'
export default SvgVideoFile
