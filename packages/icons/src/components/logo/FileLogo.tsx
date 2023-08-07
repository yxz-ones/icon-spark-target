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
const SvgFileLogo = memo(function ({
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
        fill="#F2F3F5"
        stroke="#6C6C6E"
        strokeLinecap="round"
      />
      <path d="M21 3v6a2 2 0 0 0 2 2h6" stroke="#6C6C6E" strokeLinejoin="round" />
      <rect
        x={3}
        y={11}
        width={14}
        height={14}
        rx={2}
        fill="#F2F3F5"
        stroke="#6C6C6E"
        strokeLinecap="round"
      />
      <path
        d="M8 15.84v0A1.84 1.84 0 0 1 9.84 14H10a2 2 0 0 1 2 2v.068c0 .43-.222.828-.586 1.055l-.564.35C10.32 17.8 10 18.378 10 19v0"
        stroke="#6C6C6E"
        strokeLinecap="square"
      />
      <circle cx={10} cy={22} r={1} fill="#6C6C6E" />
    </svg>
  )
})
SvgFileLogo.displayName = 'FileLogo'
export default SvgFileLogo
