import { categoriesRouter } from '@/modules/categories/servers/procedures';

import {  createTRPCRouter } from '../init'
import { studioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedures';
import { searchRouter } from '@/modules/search/server/procedures';
import { commentsRouter } from '@/modules/comments/server/procedures';
import { commentReactionsRouter } from '@/modules/comment-reactions/server/procedures';
import { suggestionsRouter } from '@/modules/suggestions/server/procedures';
import { videoViewsRouter } from '@/modules/video-views/server/procedures';
import { subscriptionsRouter } from '@/modules/subscriptions/server/procedures';
import { videoReactionsRouter } from '@/modules/video-reactions/server/procedures';

export const appRouter = createTRPCRouter({
   studio: studioRouter,
   videos: videosRouter,
   search: searchRouter,
   comments: commentsRouter,
   videoViews: videoViewsRouter,
   categories: categoriesRouter,
   suggestions: suggestionsRouter,
   subscriptions: subscriptionsRouter,
   videoReactions: videoReactionsRouter,
   commentReactions: commentReactionsRouter,
});

export type AppRouter = typeof appRouter;