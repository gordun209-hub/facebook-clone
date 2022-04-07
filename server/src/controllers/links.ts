import Router from 'express'
import jwt from 'jsonwebtoken'

import { prisma } from '../utils/prisma'

const getTokenFrom = (req: Router.Request) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

const linksRouter = Router()

linksRouter.get('/', async (_req, res) => {
  const links = await prisma.link.findMany({
    include: {
      postedBy: true,
      voters: true
    }
  })
  res.json(links)
})

linksRouter.get('/:id', async (req, res) => {
  const note = await prisma.link.findUnique({
    where: {
      id: Number(req.params.id)
    },
    include: {
      postedBy: true,
      voters: true
    }
  })
  if (note) res.json(note)
  if (!note) res.json({ error: 'Link not found' })
})

linksRouter.post('/', async (req, res) => {
  const { url, description } = req.body
  const token = getTokenFrom(req)
  if (token) {
    const { userId } = jwt.verify(token, '31') as { userId: number }
    const link = await prisma.link.create({
      data: {
        url,
        description,
        postedBy: {
          connect: {
            id: userId
          }
        }
      }
    })
    res.json(link)
  } else {
    res.status(401).json({ error: 'Not authorized' })
  }
})

export default linksRouter
