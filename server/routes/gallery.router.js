const { Router } = require('express')
const pool = require('../modules/pool')

const router = Router()

// PUT /gallery/like/:id
router.put('/like/:id', async (req, res) => {
  const { id } = req.params
  try {
    await pool.query(
      /*sql*/ `
        UPDATE "gallery"
        SET "likes" = "likes" + 1
        WHERE "id" = $1
      `,
      [id],
    )
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  /** @type {GalleryReqBody} */
  const body = req.body
  try {
    const result = await pool.query({
      text: /*sql*/ `
        INSERT INTO "gallery" ("url", "title", "description")
        VALUES ($1, $2, $3)
      `,
      values: [body.url, body.title, body.description],
    })
    console.log(result)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// GET /gallery
router.get('/', async (_req, res) => {
  try {
    /** @type {import('pg').QueryResult<GalleryDBItem>} */
    const { rows } = await pool.query(/*sql*/ `
      SELECT *
      FROM "gallery"
      ORDER BY id ASC
    `)
    res.send(rows)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router
