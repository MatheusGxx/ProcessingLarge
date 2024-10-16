import Elysia from 'elysia'
import cors from "@elysiajs/cors";
import routes from '@/routes/index'
import { log } from 'node:console'

const app = new Elysia()
app.use(cors());
app.use(routes)
app.listen(5000)

log(`🔥 API Processing is running in: ${app.server?.hostname}:${app.server?.port}`);
