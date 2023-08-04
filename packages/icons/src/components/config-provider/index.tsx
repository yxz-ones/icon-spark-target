import React, { createContext, useContext } from 'react'
import { IconBaseProps, IconProps } from '../types/index'

type ConfigContextType = Omit<IconBaseProps, 'className' | 'style'>
interface ConfigProviderProps extends ConfigContextType {
  children?: React.ReactNode
}

const ConfigContext: React.Context<ConfigContextType> = createContext({})

const useConfigContext = (props: IconProps) => {
  const configContext = useContext(ConfigContext)
  return Object.assign({}, configContext, props || {})
}

function ConfigProvider(props: ConfigProviderProps) {
  const { children, ...config } = props
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}
ConfigProvider.displayName = 'ConfigProvider'

export default ConfigProvider
export { useConfigContext }
export type { ConfigProviderProps }
