const express = require('express')
const Create = require('./Models/Create')
const Deletepg = require('./Models/Delete')
const Get = require('./Models/Get')
const GetSingle = require('./Models/GetSingle')
const Update = require('./Models/Update')
const Login = require('./Models/Login')
const Signup = require('./Models/Signup')
const Protect = require('./Middleware/Middleware')


const router = express.Router()

const middleware = [Protect]

router.route('/create').post(Create)
router.route('/delete/:id').delete(Deletepg)
router.route('/get').get(Get)
router.route('/getsingle/:id').get(GetSingle)
router.route('/update/:id').put(Update)

router.route('/login').post(Login)
router.route('/signup').post(Signup)

router.route('/verification').get(middleware,Create)

module.exports = router