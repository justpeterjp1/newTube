import { trpc } from "@/trpc/server";
import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import { PageClient } from "./client";

export default async function Home() {
  await trpc.hello.prefetch({ text: "James?" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <ErrorBoundary errorComponent={() => <p>Error</p>}> */}
          <PageClient />
        {/* </ErrorBoundary> */}
      </Suspense>
    </HydrateClient>
  );
}