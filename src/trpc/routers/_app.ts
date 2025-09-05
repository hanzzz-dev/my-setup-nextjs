import { createTRPCRouter } from "@/trpc/init";

export const appRouter = createTRPCRouter({});
export type AppRouter = typeof appRouter;
