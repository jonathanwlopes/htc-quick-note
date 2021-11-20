import { createReState, createReStateDispatch, createReStateSelect } from "@raulpesilva/re-state"

type isMobileProps = 'isMobile' | 'isDesktop'

const initialState = "isMobile"
const key = "isMobile"

export const useIsMobile = createReState<isMobileProps>(key, initialState)

export const useIsMobileSelect = createReStateSelect<isMobileProps>(key)

export const isMobileDispatch = createReStateDispatch<isMobileProps>(key)
