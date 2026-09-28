
const { services,products } = require("../../constants/data");


const getAllHome = async (req, res) => {
  try {
    res.render("home", {
      
      services,
      products,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllHome };