import { t } from "@/lib/context"
import { Processing } from "@/routes/api/Processing"

const appRouter = t.mergeRouters(Processing)

export { appRouter }