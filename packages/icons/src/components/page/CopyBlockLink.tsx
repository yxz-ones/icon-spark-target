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
const SvgCopyBlockLink = memo(function ({
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
        d="m8 8-2 2M6.487 6.973l.283-.284a1.74 1.74 0 1 1 2.46 2.46l-.284.284m-1.513 1.513-.284.284a1.739 1.739 0 1 1-2.46-2.46l.284-.283"
        stroke="#2D2D2E"
      />
      <path
        d="M1.5 4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-9ZM6 1.5H4.5a1 1 0 0 0-1 1v1M14.5 4V2.5a1 1 0 0 0-1-1H12M13 12.5h.5a1 1 0 0 0 1-1V10M8 1.5h2M14.5 8V6"
        stroke="#2D2D2E"
      />
    </svg>
  )
})
SvgCopyBlockLink.displayName = 'CopyBlockLink'
export default SvgCopyBlockLink
