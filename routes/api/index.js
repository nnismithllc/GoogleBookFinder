const router = require("express").Router();
const bookRoutes = require("./BookRoutes");

// Book routes
router.use("/BookRoutes", bookRoutes);

module.exports = router;
