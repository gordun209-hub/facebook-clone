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
  console.log(req.params.id, 'qopwiejpqowedqwiej')
  //@ts-ignore
  const id = req.params.id
  //@ts-ignore

  const user = await prisma.user.findUnique({
    where: {
      id: +id
    }
  })
  if (user) res.json(user)

  if (!user) res.json({ error: 'User not found' })
})

export default usersRouter
