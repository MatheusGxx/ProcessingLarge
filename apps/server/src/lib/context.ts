import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';
//import prisma from "@/client";

import { initTRPC } from "@trpc/server";

export const createContext = async (
  opts:  FetchCreateContextFnOptions | CreateWSSContextFnOptions,
) => ({
  req: opts.req,
});

export const t = initTRPC.context<Awaited<ReturnType<typeof createContext>>>().create();
