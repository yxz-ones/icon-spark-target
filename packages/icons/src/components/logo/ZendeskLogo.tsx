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
const SvgZendeskLogo = memo(function ({
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
      <g clipPath={`url(#prefix_${dynamicID}_a)`} stroke="#575859">
        <path d="M4.997 11.004 1.001 15M11 11.004 14.996 15M11 4.996 14.996 1M4.997 4.996 1.001 1M0 11.004h4.997V16M15.997 11.004H11L11 16M15.997 4.996H11L11 0M0 4.996h4.997V0" />
      </g>
      <defs>
        <clipPath id={`prefix_${dynamicID}_a`}>
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
SvgZendeskLogo.displayName = 'ZendeskLogo'
export default SvgZendeskLogo
