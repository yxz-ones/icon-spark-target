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
const SvgTencentVideoLogo = memo(function ({
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
        d="M5.314 14.541c-1.416-.025-1.71-1.416-1.964-3.16-.155-1.06-.182-2.155-.182-3.23 0-1.074.027-2.169.182-3.23.31-2.14.685-3.75 3.123-2.95 2.336.768 4.586 2.126 6.56 3.67.1.085.209.177.324.272.705.59 1.62 1.355 1.642 2.239-.021.882-.936 1.647-1.641 2.237-.115.096-.225.187-.324.274-1.975 1.543-4.225 2.901-6.561 3.67-.418.136-.774.203-1.08.208h-.08Z"
        fill="#4396F7"
      />
      <path
        d="M2.98 13.143c-1.202-.029-1.527-.954-1.755-2.162l-.02-.1-.036-.206C1.025 9.847 1 8.991 1 8.152c0-.84.025-1.694.17-2.523l.036-.205.019-.1c.267-1.418.668-2.447 2.464-2.094-.151.487-.247 1.067-.339 1.692-.154 1.061-.181 2.156-.181 3.23 0 1.074.027 2.169.181 3.23.092.624.188 1.204.34 1.692a3.501 3.501 0 0 1-.592.07H2.98Z"
        fill="#EF8E34"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.689 3.229c.125.025.256.055.395.094 2.181.6 4.28 1.66 6.124 2.866.66.483 1.812 1.16 1.834 1.962-.023.803-1.175 1.48-1.834 1.963-1.843 1.205-3.943 2.266-6.124 2.866-.139.038-.27.069-.395.094-.151-.488-.248-1.068-.338-1.693-.155-1.06-.182-2.156-.182-3.23 0-1.074.027-2.169.182-3.23.09-.62.185-1.197.335-1.683l.003-.009Z"
        fill="#78E445"
      />
      <path
        d="M4.845 8.156c0-1.82.13-2.04.13-2.04.053-.234.18-.298.378-.241 0 0 .587.124 2.006.87 1.435.754 1.875 1.168 1.875 1.168.217.188.172.305 0 .483 0 0-.269.308-1.875 1.14-1.606.83-2.006.894-2.006.894-.239.056-.332-.015-.377-.24 0 0-.13-.21-.13-2.034Z"
        fill="#fff"
      />
    </svg>
  )
})
SvgTencentVideoLogo.displayName = 'TencentVideoLogo'
export default SvgTencentVideoLogo
