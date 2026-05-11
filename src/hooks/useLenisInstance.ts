import { useContext } from 'react'
import { LenisContext } from '../context/lenisContext'

export function useLenisInstance() {
  return useContext(LenisContext)
}
