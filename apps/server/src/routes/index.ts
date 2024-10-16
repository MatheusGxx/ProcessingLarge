import { trpc } from "@elysiajs/trpc";
import { appRouter } from "@/routes/api/index";
import { createContext } from "@/lib/context";

const router = trpc(appRouter, {
  createContext,
  endpoint: "/massive",
});

export default router;
