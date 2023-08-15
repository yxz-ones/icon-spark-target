import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
import { useMemo } from 'react'
function SvgStatus(iconProps: IconProps) {
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
  const dynamicID = useMemo < string > (() => Math.random().toString(36).slice(-6), [])
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
      <g clipPath={`url(#prefix_${dynamicID}_a)`}>
        <path fill="#fff" d="M0 0h16v16H0z" />
        <mask id={`prefix_${dynamicID}_b`} fill="#fff">
          <path
            fillRule="evenodd"
            d="M1.243 2.243a1 1 0 0 1 1-1h6.07l6.365 6.364a1 1 0 0 1 0 1.414L9.02 14.678a1 1 0 0 1-1.414 0L1.243 8.314V2.243Z"
            clipRule="evenodd"
          />
        </mask>
        <path
          fill={color}
          d="M2.243 1.243v1-1Zm-1 1h1-1Zm7.07-1v-1h.415l.293.293-.707.707Zm6.365 6.364.707-.708-.707.708Zm-7.071 7.07.707-.706-.707.707ZM1.243 8.315l-.707.707-.293-.293v-.414h1Zm1-6.071h-2a2 2 0 0 1 2-2v2Zm6.07 0h-6.07v-2h6.07v2Zm5.658 6.07L7.607 1.95 9.02.536l6.364 6.363-1.414 1.415Zm0 0L15.385 6.9a2 2 0 0 1 0 2.829l-1.414-1.414Zm-5.657 5.658 5.657-5.657 1.414 1.414-5.657 5.657-1.414-1.414Zm0 0 1.414 1.414a2 2 0 0 1-2.828 0l1.414-1.414ZM1.95 7.607l6.364 6.364L6.9 15.385.536 9.02 1.95 7.607Zm.293-5.364v6.07h-2v-6.07h2Z"
          mask={`url(#prefix_${dynamicID}_b)`}
        />
        <path
          stroke={color}
          d="M5.132 7.253a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.121Z"
        />
      </g>
      <defs>
        <clipPath id={`prefix_${dynamicID}_a`}>
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
SvgStatus.displayName = 'Status'
export default SvgStatus
