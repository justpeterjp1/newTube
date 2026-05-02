'use client';

import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import React, { useState } from 'react'
import { makeQueryClient } from './query-client';
import type { AppRouter } from './routers/_app';


export const trpc = createTRPCReact<AppRouter>();

let ClientQuerySingleton: QueryClient;
function getQueryClient() {
    if (typeof window === 'undefined') {
        return makeQueryClient();
    }
   
    return(ClientQuerySingleton ??= makeQueryClient());
}

function getURL() {
    const base = (() => {
        if (typeof window !== 'undefined') return '';
        if (process.env.NEXT_PUBLIC_BASE_URL)  
            return  `https://${process.env.NEXT_PUBLIC_BASE_URL}`;
             return 'http://localhost:3000';
    })();
    return `${base}/api/trpc`
}


export function TRPCProvider(
    props: Readonly<{
        children: React.ReactNode;
    }>
) {

    const queryClient = getQueryClient();
    const [trpcClient] = useState(() =>
    trpc.createClient({
        links:[httpBatchLink({
            url: getURL(),
        }),]
    }),
)
 return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
 )
}