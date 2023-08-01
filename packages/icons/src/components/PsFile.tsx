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
const SvgPsFile = memo(function ({
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
        fill="#E6F0FF"
        stroke="#0064FF"
        strokeLinecap="round"
      />
      <path d="M21 3v6a2 2 0 0 0 2 2h6" stroke="#0064FF" strokeLinejoin="round" />
      <rect
        x={3}
        y={12}
        width={14}
        height={12}
        rx={1}
        fill="#0064FF"
        stroke="#0064FF"
        strokeLinejoin="round"
      />
      <path
        d="M4.323 20v-4.47h1.716c.308 0 .58.054.816.162.24.108.428.268.564.48.136.212.204.474.204.786 0 .304-.07.562-.21.774a1.313 1.313 0 0 1-.564.486 1.927 1.927 0 0 1-.81.162h-.786V20h-.93Zm.93-2.43h.792a.708.708 0 0 0 .342-.078.6.6 0 0 0 .306-.534.61.61 0 0 0-.084-.324.55.55 0 0 0-.222-.216.708.708 0 0 0-.342-.078h-.792v1.23ZM9.775 20.072c-.28 0-.544-.05-.792-.15a1.904 1.904 0 0 1-.636-.438 1.833 1.833 0 0 1-.396-.666l.762-.342c.112.244.266.436.462.576.2.14.42.21.66.21.128 0 .238-.02.33-.06a.532.532 0 0 0 .216-.162.42.42 0 0 0 .078-.252.383.383 0 0 0-.096-.264.64.64 0 0 0-.3-.18l-.876-.288c-.356-.116-.624-.28-.804-.492a1.17 1.17 0 0 1-.27-.774c0-.264.064-.496.192-.696.132-.2.314-.356.546-.468.236-.112.506-.168.81-.168.268 0 .516.046.744.138a1.7 1.7 0 0 1 .588.39c.168.168.294.37.378.606l-.756.342a1.051 1.051 0 0 0-.378-.486.966.966 0 0 0-.576-.18.852.852 0 0 0-.33.06.488.488 0 0 0-.222.174.42.42 0 0 0-.078.252c0 .104.034.196.102.276.068.076.17.136.306.18l.858.276c.36.116.628.278.804.486.18.208.27.462.27.762 0 .26-.068.492-.204.696-.136.2-.324.358-.564.474a1.912 1.912 0 0 1-.828.168ZM12.034 20v-4.47h1.458c.484 0 .904.096 1.26.288.356.192.632.456.828.792.196.336.294.72.294 1.152 0 .432-.098.818-.294 1.158-.196.336-.472.6-.828.792-.356.192-.776.288-1.26.288h-1.458Zm.93-.81h.552c.292 0 .544-.058.756-.174.212-.12.376-.286.492-.498.12-.216.18-.468.18-.756 0-.292-.06-.544-.18-.756a1.214 1.214 0 0 0-.492-.492 1.552 1.552 0 0 0-.756-.174h-.552v2.85Z"
        fill="#fff"
      />
    </svg>
  )
})
SvgPsFile.displayName = 'PsFile'
export default SvgPsFile
