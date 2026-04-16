const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.json([
        { id: 1, nombre: "Parque" },
        { id: 2, nombre: "Plaza" }
    ]);
});

// POST
router.post('/', (req, res) => {
    const data = req.body;
    res.json({
        mensaje: "Datos recibidos",
        data: data
    });
});

module.exports = router;