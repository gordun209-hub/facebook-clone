import cors from 'cors'
import express, { Application } from 'express'

import linksRouter from './controllers/links'
import signinRouter from './controllers/signin'
import signUpRouter from './controllers/signup'
import userRouter from './controllers/users'
import middleware from './utils/middleware'

const app: Application = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.errorHandler)
app.use(middleware.requestLogger)
app.use('/api/signin', signinRouter)
app.use('/api/signup', signUpRouter)
app.use('/api/link', linksRouter)
app.use('/api/users', userRouter)
export default app
