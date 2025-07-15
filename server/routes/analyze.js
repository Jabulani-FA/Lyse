const express = require('express')
const axios = require('axios')
const router = express.Router()

router.post('/', async (req, res) => {
  const { input } = req.body
  if (!input) return res.status(400).json({ error: 'Missing input' })

  try {
    const response = await axios.post(process.env.LANGFLOW_API, {
      input_value: input
    })

    res.json(response.data)
  } catch (err) {
    console.error('Langflow error:', err.message)
    res.status(500).json({ error: 'Langflow API call failed' })
  }
})

module.exports = router