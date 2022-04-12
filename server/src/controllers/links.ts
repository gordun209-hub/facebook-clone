import Router from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

import { prisma } from '../utils/prisma'

const linksRouter = Router()
// get all links
linksRouter.get('/', async (_req, res) => {
  const links = await prisma.link.findMany({
    include: {
      postedBy: true,
      voters: true
    }
  })
  res.json(links)
})
// get spesific link by id
linksRouter.get('/:id', async (req, res) => {
  const link = await prisma.link.findUnique({
    where: {
      id: Number(req.params.id)
    },
    include: {
      postedBy: true,
      voters: true
    }
  })
  if (link) res.json(link)
  if (link) res.json({ error: 'Link not found' })
})

// get users links
linksRouter.get('/userLinks/:id', async (req, res) => {
  const links = await prisma.link.findMany({
    where: {
      postedBy: {
        id: Number(req?.params?.id)
      }
    },
    include: {
      voters: true,
      postedBy: true
    }
  })
  res.json(links)
})
linksRouter.post('/', async (req, res) => {
  const { url, description, country, title } = req.body

  const token = req.headers.authorization?.substring(7)
  if (token) {
    console.log(token)
    const { userId } = jwt.verify(token, '31') as JwtPayload
    try {
      const link = await prisma.link.create({
        data: {
          url,
          description,
          country,
          title,
          postedBy: {
            connect: {
              id: userId
            }
          }
        }
      })
      res.json(link).status(201)
    } catch (e) {
      res.json(e).status(400)
    }
  }
})
linksRouter.put('/:id', async (req, res) => {
  const { url, description, country, title } = req.body
  const link = await prisma.link.update({
    where: {
      id: Number(req.params.id)
    },
    data: {
      url,
      description,
      country,
      title
    }
  })
  res.json(link)
})

linksRouter.delete('/:id', async (req, res) => {
  const link = await prisma.link.delete({
    where: {
      id: Number(req.params.id)
    }
  })
  res.json(link)
})

export default linksRouter
