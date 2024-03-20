import express from 'express'
import colors from 'colors'

const port = 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/', () => {
//   console.log('test')
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`.cyan.underline)
})
