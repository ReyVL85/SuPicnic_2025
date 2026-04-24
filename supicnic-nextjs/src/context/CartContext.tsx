'use client'
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { CartItem } from '@/types'

interface CartCtx {
  items: CartItem[]
  add: (item: Omit<CartItem, 'cantidad'>) => void
  remove: (id: number, tipo: string) => void
  change: (id: number, tipo: string, delta: number) => void
  clear: () => void
  total: number
  count: number
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const add = useCallback((item: Omit<CartItem, 'cantidad'>) => {
    setItems(prev => {
      const ex = prev.find(i => i.id === item.id && i.tipo === item.tipo)
      if (ex) return prev.map(i => i.id === item.id && i.tipo === item.tipo ? { ...i, cantidad: i.cantidad + 1 } : i)
      return [...prev, { ...item, cantidad: 1 }]
    })
  }, [])

  const remove = useCallback((id: number, tipo: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.tipo === tipo)))
  }, [])

  const change = useCallback((id: number, tipo: string, delta: number) => {
    setItems(prev => prev
      .map(i => i.id === id && i.tipo === tipo ? { ...i, cantidad: i.cantidad + delta } : i)
      .filter(i => i.cantidad > 0))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const total = items.reduce((s, i) => s + i.precio * i.cantidad, 0)
  const count  = items.reduce((s, i) => s + i.cantidad, 0)

  return <Ctx.Provider value={{ items, add, remove, change, clear, total, count }}>{children}</Ctx.Provider>
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
