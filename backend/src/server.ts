import express from "express"
import { SimulateGamesRequestFromJSON } from "../../shared/openapi/models"
import { simulateGames } from "./simulateGames"
import { validate } from "./validation"
import { getCategories } from "./tracker"

const app = express()
const port = process.env.PORT || 3333

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }))
app.use(express.text({ type: "text/html" }))

app.post("/api/montyhall/simulate", async (req, res) => {
  const { isValid, errors } = validate(req.body, 'myDoc#/components/schemas/SimulateGamesRequest')
  if (isValid) {
    const request = SimulateGamesRequestFromJSON(req.body)
    const result = simulateGames(request)
    res.send(result)
  } else {
    res.statusCode = 400
    res.send({ errors })
  }
})

app.get("/api/tracker/categories", async (req, res) => {
    res.send(getCategories())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
