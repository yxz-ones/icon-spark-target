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
const SvgAnnotation = memo(function ({
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
        d="M13.5 2.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H5L6 11l1-1.5h5.5a1 1 0 0 0 1-1v-6Z"
        stroke="#2D2D2E"
        strokeLinejoin="round"
      />
      <path d="M14 13.5H4M2.5 15v-3" stroke="#2D2D2E" />
      <path d="M5 4.5h6m-6 2h4" stroke="#2D2D2E" strokeLinejoin="round" />
    </svg>
  )
})
SvgAnnotation.displayName = 'Annotation'
export default SvgAnnotation
