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
const SvgSettings = memo(function ({
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
        d="M5.54 3.72c.212-.122.434-.229.665-.32l.443-2.105h2.66l.444 2.106c.23.09.452.197.665.32M10.417 12.17c-.213.122-.435.23-.665.32l-.444 2.105h-2.66l-.443-2.106a4.853 4.853 0 0 1-.665-.32M10.418 3.722c.212.122.416.26.609.415l2.045-.669 1.33 2.304L12.8 7.209c.026.171.043.343.05.514"
        stroke="#575859"
      />
      <path
        d="M3.1 7.945c0 .245.019.491.056.736l-1.602 1.437 1.33 2.304 2.046-.67c.193.156.397.295.61.417M12.856 7.945c0 .245-.018.491-.056.736l1.602 1.437-1.33 2.304-2.045-.67a4.865 4.865 0 0 1-.609.416M5.54 3.72a4.855 4.855 0 0 0-.61.417l-2.046-.669-1.33 2.304 1.602 1.437a4.856 4.856 0 0 0-.055.736"
        stroke="#575859"
      />
      <path
        d="M12.855 8.046a4.857 4.857 0 0 0-.055-.837l.998-.895a1 1 0 0 0 .199-1.245l-.519-.898a1 1 0 0 0-1.177-.45l-1.274.416a4.85 4.85 0 0 0-.61-.416"
        stroke="#575859"
      />
      <circle cx={8} cy={8} r={1.746} stroke="#575859" />
    </svg>
  )
})
SvgSettings.displayName = 'Settings'
export default SvgSettings
