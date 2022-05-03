const express = require('express')
const router = express.Router()

const {
	getUsers,
	addUsers,
	updateUsers,
	deleteUsers
} = require('../controllers/users')

router.get('/',getUsers)

router.post('/',addUsers)

router.put('/:id',updateUsers)

router.delete('/:id',deleteUsers)

module.exports = router
