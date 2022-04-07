import bcrypt from 'bcrypt'
import { Router } from 'express'
import jwt from 'jsonwebtoken'

import { prisma } from '../utils/prisma'

const signinRouter = Router()

signinRouter.post('/', async (req, res) => {
  const {
    username,
    password
  }: {
    username: string
    password: string
  } = req.body
  const user = await prisma.user.findFirst({
    where: {
      username
    }
  })

  const isPasswordValid =
    user === null ? false : await bcrypt.compare(password, user?.password)
  if (!(user && isPasswordValid)) {
    res.status(400).json({ error: 'Invalid username or password' })
  }
  const token = jwt.sign({ userId: user?.id, username: user?.username }, '31')
  res
    .json({
      token,
      user
    })
    .status(200)
})

export default signinRouter
