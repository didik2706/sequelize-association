const express = require('express');
const router = express.Router();
const { Users, Prodi } = require('../models')

router.post('/', async (req, res) => {
    const { nama, nim, prodi } = req.body;

    await Users.create({
        nama, nim
    }).then(async result => {
        await Prodi.create({ user_id: result.id, prodi })
            .then(() => {
                return res.status(201).json({
                    status: 'success',
                    message: 'data successfully added',
                    data: result
                })
            }).catch(error => {
                return res.status(400).json({
                    status: 'error',
                    message: error.message
                })
            })
    }).catch(error => {
        return res.status(400).json({
            status: 'error',
            message: error.message
        })
    })
});

router.get('/', async (req, res) => {
    await Users.findAll({
        include: { model: Prodi, attributes: ['userId', 'prodi'] }
    }).then(result => {
        return res.json({
            result
        })
    })
})

module.exports = router;