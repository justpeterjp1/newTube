"use client"

import { trpc } from "@/trpc/client"

export const PageClient = () => {
    const [ data ] = trpc.hello.useSuspenseQuery({ text: "" });

return (<p>Let us test if it will say {data?.greeting}</p>)

};



