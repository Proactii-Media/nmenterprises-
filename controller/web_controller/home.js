
const { services,products,counters,homeBanners } = require("../../constants/data");


const getAllHome = async (req, res) => {
  try {
    res.render("home", {
      homeBanners,
      counters,
      services,
      products,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllHome };