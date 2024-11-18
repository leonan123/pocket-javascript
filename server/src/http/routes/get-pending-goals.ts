import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/pending-goals', async (_, res) => {
    const { pendingGoals } = await getWeekPendingGoals()

    res.status(200).send({ pendingGoals })
  })
}
