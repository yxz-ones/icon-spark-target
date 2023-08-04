import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
function SvgAction(iconProps: IconProps) {
  const {
    className,
    color = 'currentColor',
    fontSize,
    highlight,
    nonScalingStroke = true,
    style,
    strokeWidth = 2,
    ...props
  } = useConfigContext(iconProps)
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
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
      <path stroke={color} strokeLinejoin="round" d="M3 9.615 8 1v5.385h5L8 15V9.615H3Z" />
    </svg>
  )
}
SvgAction.displayName = 'Action'
export default SvgAction
