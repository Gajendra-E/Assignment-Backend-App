
var db = require('../models')
var moment = require('moment')

const fetchAllUsers = async (req, res) => {

    try {
        let users = await db.User.findAll()
        return res.status(200).json({
            status: "Success",
            payload: users,
            message: "users fetched successfully created"
        })
    }
    catch (error) {
        return res.status(200).json({
            status: "Failed",
            error: error,
            message: "user notfetched successfully"
        })
    }
}

const phoneNumberValidation = async (req, res, next) => {
    let { phone_number } = req.body
    if (phone_number.length === 10) {
        next()
    }
    else {
        return res.json({
            status: "Failed",
            message: "Invalide Phone Number"
        })
    }
}

const addUser = async (req, res) => {
    let { name,  email, phone_number,date_of_birth  } = req.body
    try {
        let user = await db.User.findOne({ where: { email: email } })
        console.log(JSON.stringify(user))
        if (user) {
            return res.status(201).json({
                status: "Failed",
                message: "user email already exist in the db"
            })
        }
        else {
            let result = await db.User.create({
                name: name,
                date_of_birth:date_of_birth,
                email: email,
                phone_number: phone_number
            })
            return res.status(200).json({
                status: "Success",
                payload: result,
                message: "user successfully created"
            })
        }
    }
    catch (error) {
        return res.status(200).json({
            status: "Failed",
            error: error,
            message: "user not successfully created"
        })
    }
}

module.exports = {
    fetchAllUsers,
    addUser,
    phoneNumberValidation
}