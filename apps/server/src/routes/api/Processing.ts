import { router, publicProcedure } from "@/routes/api/trpc";
import { z } from "zod";
import { log } from "node:console";
import { fileProcessing } from "@/services/ProcessingService";

export const Processing = router({
  processing: publicProcedure
    .input(
      z.object({
        fileS3: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      log(input);
      const { fileS3 } = input;
      return await fileProcessing(fileS3);
    }),
});
