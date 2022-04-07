import { PrismaClient } from '@prisma/client'
import Router from 'express'

const prisma = new PrismaClient()

const usersRouter = Router()

usersRouter.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

usersRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    }
  })
  if (user) res.json(user)
  if (!user) res.json({ error: 'User not found' })
})

export default usersRouter
