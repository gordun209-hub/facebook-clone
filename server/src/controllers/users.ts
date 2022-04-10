/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from '@prisma/client'
import Router from 'express'

const prisma = new PrismaClient()

const usersRouter = Router()

usersRouter.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})
usersRouter.get('/:id/', async (req, res) => {
  //@ts-ignore
  const id = req.params.id
  //@ts-ignore
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: +id
      }
    })
    if (user) res.json(user).status(200)
    if (!user) res.status(404).json({ error: 'User not found' })
  } catch (err) {
    res.status(404).json({ error: 'User not found' })
  }
})

export default usersRouter
