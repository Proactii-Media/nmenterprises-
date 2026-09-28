const { services } = require("../../constants/data");

const getAllServices = async (req, res) => {

    try {

        res.render("services", {
            services,
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = { getAllServices };