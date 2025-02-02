import express from 'express'
import cors from 'cors'

const app = express();
const port = 8000 || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.get('/api/classify-number', (req, res) => {
    const number = req.query.number
    console.log(number) 
    res.send()

})

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
})




