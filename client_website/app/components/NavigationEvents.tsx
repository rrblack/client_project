'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}
export default function NavigationEvents() {
    
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    window.dataLayer?.push({
      event: 'pageview',
      page: pathname,
    })
  }, [pathname, searchParams])

  return null
}