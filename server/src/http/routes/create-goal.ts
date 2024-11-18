import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../functions/create-goal'

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: z.string(),
          desiredWeeklyFrequency: z.number().int().min(1).max(7),
        }),
        response: {
          204: z.null(),
        },
      },
    },
    async (req, res) => {
      const body = req.body

      await createGoal({
        title: body.title,
        desiredWeeklyFrequency: body.desiredWeeklyFrequency,
      })

      res.status(204).send()
    }
  )
}
