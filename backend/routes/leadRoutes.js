const express = require("express");

const router = express.Router();


const {

createLead,

getLeads,

updateLeadStatus

} = require("../controllers/leadController");



// POST Lead

router.post("/",createLead);


// GET Leads

const protect = require("../middleware/authMiddleware");


router.get(
"/",
protect,
getLeads
);

router.put(
"/:id",
protect,
updateLeadStatus
);

module.exports = router;

