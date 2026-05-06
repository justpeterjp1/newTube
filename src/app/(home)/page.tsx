import { HomeView } from "@/modules/home/ui/views/home-view";
import { trpc } from "@/trpc/server";
import { HydrateClient } from "@/trpc/server";

import { DEFAULT_LIMIT } from '@/constants'
export const dynamic = "force-dynamic"

interface PageProps {
  searchParams: Promise<{
    categoryId?: string;
  }>
}

const Page = async ({ searchParams }: PageProps) => {
  const { categoryId } = await searchParams;

  await trpc.categories.getMany.prefetch();
  await trpc.categories.getMany.prefetchInfinite({ categoryId, limit: DEFAULT_LIMIT});

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
};

export default Page;

