import express from 'express'
import userRoutes from './routes/user.routes'
import { errorHandler } from './middlewares/errorHandler'

const app = express()
app.use(express.json())
app.use('/users', userRoutes)

app.use(errorHandler)

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000')
})