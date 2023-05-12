const express = require('express');
const { register, login } = require('../controllers/auth');
// const { } = require("../validators/auth");

// const {  } = require('../middlewares/validar-jwt');
// const {  } = require('../middlewares/validated-role');


const router = express.Router()


router.get("/", )
router.get("/:id", )
router.put("/:id", )

// ruta protegida
router.delete("/:id", )



router.post("/auth/register",register )
router.post("/auth/login",login )





module.exports = router;

