import bcrypt from 'bcrypt'
import { Router } from 'express'
import { sign } from 'jsonwebtoken'

import { prisma } from '../utils/prisma'

const signupRouter = Router()

signupRouter.post('/', async (req, res) => {
  const {
    username,
    password,
    email,
    name
  }: { email: string; name: string; username: string; password: string } =
    req.body
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })
  if (user) {
    res.status(400).json({ error: 'Username already exists' })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
        name
      }
    })
    res.json({
      token: sign({ userId: user?.id }, '31'),
      user: newUser
    })
  } catch (e) {
    res.json({ error: 'Something went wrong' }).status(403)
  }
})

export default signupRouter
