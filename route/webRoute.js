const express = require("express");
const webRouter = express.Router();

const home = require("../controller/web_controller/home.js");
const about = require("../controller/web_controller/about.js");
const contact = require("../controller/web_controller/contact.js");
const services = require("../controller/web_controller/services.js");
// const qualityPolicy = require("../controller/web_controller/qualitypolicy.js");
const product = require("../controller/web_controller/product.js");



webRouter.get("/", home.getAllHome);
webRouter.get("/about", about.getAllAbout);
webRouter.get("/contact", contact.getAllContact);
webRouter.post("/contact", contact.sendContactMail);
// webRouter.get("/quality_policy", qualityPolicy.getAllQualityPolicy);
webRouter.get("/services", services.getAllServices);
webRouter.get("/products", product.getAllproduct);

module.exports = webRouter;