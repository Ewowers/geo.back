const control = require("../controler/healthcare_facilities.control");
const { Router } = require("express");
const router = Router();
router.get("/", control.get); //get all
router.get("/id=:id", control.getId); // get id
router.get("/ids=:id", control.getIds); //type
router.post("/add", control.add); //add
router.delete("/:id", control.delete); // delete
module.exports = router;
