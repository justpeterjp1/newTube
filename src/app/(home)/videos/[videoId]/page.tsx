import { HydrateClient, trpc } from "@/trpc/server";

import { DEFAULT_LIMIT } from "@/constants";

import { VideoView } from "@/modules/videos/ui/views/video-view";

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{
    videoId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { videoId } = await params;

  await trpc.videos.getOne.prefetch({ id: videoId });
  await trpc.comments.getMany.prefetchInfinite({ videoId, limit: DEFAULT_LIMIT });
  await trpc.suggestions.getMany.prefetchInfinite({ videoId, limit: DEFAULT_LIMIT });

  return ( 
    <HydrateClient>
      <VideoView videoId={videoId} />
    </HydrateClient>
  );
};
 
export default Page;
