const { Router } = require('express')
const pool = require('../modules/pool')

const router = Router()

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
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
