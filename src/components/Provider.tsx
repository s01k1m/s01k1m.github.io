'use client'
// layout에서 authprovider 와 react query provider로
// 감싸고 싶었는데 use client를 써야해서 이렇게 컴포넌트화 시켜서 사용함

import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

type Props = {
  children?: React.ReactNode
}

export const Provider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  )
}
