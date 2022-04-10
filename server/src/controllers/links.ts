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
        id: Number(req.params.id)
      }
    }
  })
  res.json(links)
})
// create new link
// linksRouter.post('/', async (req, res) => {
//   const { url, description, country } = req.body
//   const token = getTokenFrom(req)
//   if (token) {
//     const { userId } = jwt.verify(token, '31') as { userId: number }
//     const link = await prisma.link.create({
//       data: {
//         url,
//         description,
//         country,

//         postedBy: {
//           connect: {
//             id: userId
//           }
//         }
//       }
//     })
//     res.json(link)
//   } else {
//     res.status(401).json({ error: 'Not authorized' })
//   }
// })

export default linksRouter
