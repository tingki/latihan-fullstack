const { json } = require('body-parser');
const { response } = require('express');

const bcrypt = require('bcrypt');
const saltRounds = 0;

const jwt = require('jsonwebtoken');


require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
    user: `${process.env.DB_USER}`,
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUsersByEmail = (request, response) => {
    var email = request.params.email;
    pool.query('SELECT * FROM users where email = $1', [email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);

    })
}

const createUsers = (request, response) => {
    const { first_name, last_name, phone_number, role_id, email, password } = request.body
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash_password = bcrypt.hashSync(password, saltRounds);

    pool.query('INSERT INTO users (first_name, last_name, phone_number, role_id, email, password) VALUES ($1, $2, $3, $4, $5, $6)', [first_name, last_name, phone_number, role_id, email, hash_password], (error, result) => {
        if (error) {
            throw error
        }
        response.status(201).json(result.rowCount);
        // troubleshoot this line of code further, not functioning correctly
    })
}

const loginUser = (request, response) => {
    const { email, password } = request.body

    pool.query('select * from users where email = $1', [email], (error, result) => {
        if (error) {
            throw error
        }
        if (result.rowCount == 1) {
            var pass = bcrypt.compareSync(password, result.rows[0].password);
            var token = jwt.sign({
                'email': email,
                'name' : result.rows[0].first_name + result.rows[0].last_name,
                'role_id' : result.rows[0].role_id,
            }, 'login', { expiresIn: 60 * 60 });

            response.status(201).json(result.rows);
        }
        else {
            response.status(201).json(false);
        }
        // troubleshoot this line of code further, not functioning correctly
    })
}



module.exports = {
    getUsers,
    getUsersByEmail,
    createUsers,
    loginUser,
}