const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const stuffCtrl = require("../controller/stuff");

router.post("/", auth, stuffCtrl.createThing);

router.put("/:id", auth, stuffCtrl.modifyThing);

router.delete("/:id", auth, stuffCtrl.deleteThing);

router.get("/:id", auth, stuffCtrl.getOneThing);

router.get("/", auth, stuffCtrl.getAllThings);

module.exports = router;
