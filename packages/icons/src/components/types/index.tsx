import React from 'react'

interface IconBaseProps {
  /** 图标的类名 */
  className?: string
  /** 图标颜色，也可以通过 CSS 的 `color` 属性修改 */
  color?: string
  /** 图标的尺寸 */
  fontSize?: number | string
  /** 高亮色，仅双色图标有效 */
  highlight?: string
  /** 是否阻止图标的轮廓宽度随图标的缩放而改变 */
  nonScalingStroke?: boolean
  /** 图标轮廓的宽度 */
  strokeWidth?: number
  /** 图标的行内样式 */
  style?: React.CSSProperties
}

// Todo: 后续可以使用 ts-morph 或编写字符串模板的方式，将 svgr.config.cjs 中的类型模版集成在此类型
type IconProps = IconBaseProps & React.SVGProps<SVGSVGElement>

export type { IconBaseProps, IconProps }
