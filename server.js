const express = require("express")
const app = express()


const port = process.env.PORT || 8082

app.use(express.static('.'))

app.listen(port, () => console.log(`Ejecutando en puerto ${port}`))




