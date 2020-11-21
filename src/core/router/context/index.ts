import { createContext } from 'preact'

const RouterContext = createContext<Record<string, string> | null>(null)

export default RouterContext
