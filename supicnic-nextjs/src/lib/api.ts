import type { Cesta, Producto } from '@/types'

const BASE = '/api'

export async function getProductos(): Promise<Producto[]> {
  const res = await fetch(`${BASE}/productos`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Error cargando productos')
  return res.json()
}

export async function getCestas(): Promise<Cesta[]> {
  const res = await fetch(`${BASE}/cestas`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Error cargando cestas')
  return res.json()
}

export async function initData() {
  await fetch(`${BASE}/init-data`, { method: 'POST' }).catch(() => null)
}

export async function crearPedido(body: unknown) {
  const res = await fetch(`${BASE}/pedidos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return res.json()
}

export async function enviarContacto(body: unknown) {
  const res = await fetch(`${BASE}/contacto`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return res.json()
}
