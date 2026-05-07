import { DEFAULT_LIMIT } from "@/constants";
import { HydrateClient, trpc } from "@/trpc/server";

import { VideosView } from "@/modules/playlists/ui/views/videos-view";
import { PlaylistsView } from "@/modules/playlists/ui/views/playlists-view.tsx"
export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ playlistId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { playlistId } = await params;

  void trpc.playlists.getOne.prefetch({ id: playlistId });
  void trpc.playlists.getVideos.prefetchInfinite({ playlistId, limit: DEFAULT_LIMIT });

  return ( 
    <HydrateClient>
      <PlaylistsView playlistId={playlistId} />
    </HydrateClient>
  );
}
 
export default Page;
