import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
function SvgExcel(iconProps: IconProps) {
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
      <path
        fill="#D7F7EA"
        d="M2.5 2.5v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5.414a1 1 0 0 0-.293-.707l-2.914-2.914a1 1 0 0 0-.707-.293H3.5a1 1 0 0 0-1 1Z"
      />
      <path
        fill="#94E3C3"
        d="M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 12V8Z"
      />
      <path
        fill="#00A865"
        fillRule="evenodd"
        d="M3 13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V6h-2.5A1.5 1.5 0 0 1 9 4.5V2H3.5a.5.5 0 0 0-.5.5v11Zm7-11.293V4.5a.5.5 0 0 0 .5.5h2.293L10 2.207ZM3.5 15A1.5 1.5 0 0 1 2 13.5v-11A1.5 1.5 0 0 1 3.5 1h6.086a1.5 1.5 0 0 1 1.06.44l2.915 2.914A1.5 1.5 0 0 1 14 5.414V13.5a1.5 1.5 0 0 1-1.5 1.5h-9Z"
        clipRule="evenodd"
      />
      <path fill="#D7F7EA" d="M5 9.5h6V12a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 12V9.5Z" />
      <path
        fill="#00A865"
        fillRule="evenodd"
        d="M5.5 7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-5Zm5 2V8H8v1h2.5ZM7 8H5.5v1H7V8Zm-1.5 2v2H7v-2H5.5ZM8 12h2.5v-2H8v2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
SvgExcel.displayName = 'Excel'
export default SvgExcel
