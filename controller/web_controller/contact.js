
const nodemailer = require("nodemailer");
const { services } = require("../../constants/data");

// ===============================
// GET CONTACT PAGE
// ===============================
const getAllContact = async (req, res) => {

    try {

        res.render("contact", {
            services,
            success: req.query.success === "1"
        });

    } catch (error) {

        console.error("GET CONTACT ERROR:", error);

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};


// ===============================
// SEND CONTACT EMAIL
// ===============================
const sendContactMail = async (req, res) => {

    try {

        // ===============================
        // GET FORM VALUES
        // ===============================

        const name = req.body.dzName;
        const email = req.body.dzEmail;
        const phone = req.body.dzOther?.Phone;
        const subject = req.body.dzOther?.Subject;
        const message = req.body.dzMessage;


        // ===============================
        // REQUIRED FIELD VALIDATION
        // ===============================

        if (!name || !email || !phone || !subject || !message) {

            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });

        }


        // ===============================
        // PHONE VALIDATION
        // ===============================

        if (!/^[0-9]{10}$/.test(phone)) {

            return res.status(400).json({
                success: false,
                message: "Phone number must contain exactly 10 digits."
            });

        }


        // ===============================
        // GMAIL TRANSPORTER
        // ===============================

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {
                user: "pm7244875@gmail.com",
                pass: "imdvvhhckyvaxkbe"
            }

        });


        // ===============================
        // SEND EMAIL
        // ===============================

        await transporter.sendMail({

            from: "pm7244875@gmail.com",

            to: "pm7244875@gmail.com",

            replyTo: email,

            subject: subject,

html: `
<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="
        margin:0;
        padding:0;
        background:#f2f2f2;
        font-family:Arial,Helvetica,sans-serif;
        color:#222222;
    ">

    <tr>
        <td align="center" style="padding:40px 15px;">

            <!-- MAIN CONTAINER -->
            <table width="680" cellpadding="0" cellspacing="0" border="0"
                style="
                    width:100%;
                    max-width:680px;
                    background:#ffffff;
                    border:1px solid #dddddd;
                ">

                <!-- TOP BRAND BAR -->
                <tr>
                    <td style="
                        height:6px;
                        background:#ED1E25;
                        font-size:0;
                        line-height:0;
                    ">
                        &nbsp;
                    </td>
                </tr>


                <!-- HEADER -->
                <tr>
                    <td style="
                        background:#111111;
                        padding:28px 35px;
                    ">

                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td align="center">

                                    <div style="
                                        color:#CDA267;
                                        font-size:12px;
                                        font-weight:bold;
                                        letter-spacing:2px;
                                        text-transform:uppercase;
                                        margin-bottom:8px;
                                    ">
                                        N.M. ENTERPRISES
                                    </div>

                                    <div style="
                                        color:#ffffff;
                                        font-size:25px;
                                        font-weight:700;
                                        line-height:1.3;
                                    ">
                                        New Contact Enquiry
                                    </div>

                                    <div style="
                                        color:#bdbdbd;
                                        font-size:13px;
                                        margin-top:7px;
                                    ">
                                        A new enquiry has been received from your website.
                                    </div>

                                </td>

                          

                            </tr>
                        </table>

                    </td>
                </tr>


                <!-- CONTENT -->
                <tr>
                    <td style="padding:32px 35px 35px;">

                        <!-- SECTION TITLE -->

                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr>

                                <td width="4"
                                    style="
                                        background:#ED1E25;
                                        height:24px;
                                        font-size:0;
                                    ">
                                    &nbsp;
                                </td>

                                <td style="padding-left:12px;">

                                    <div style="
                                        color:#111111;
                                        font-size:18px;
                                        font-weight:700;
                                    ">
                                        Enquiry Details
                                    </div>

                                </td>

                            </tr>
                        </table>


                        <!-- SPACING -->

                        <div style="height:22px; line-height:22px;">
                            &nbsp;
                        </div>


                        <!-- DETAILS TABLE -->

                        <table width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            style="
                                border:1px solid #e3e3e3;
                            ">


                            <!-- NAME -->

                            <tr>
                                <td width="150"
                                    style="
                                        padding:15px 16px;
                                        background:#f8f8f8;
                                        border-bottom:1px solid #e3e3e3;
                                        color:#ED1E25;
                                        font-size:13px;
                                        font-weight:700;
                                    ">
                                    NAME
                                </td>

                                <td style="
                                    padding:15px 16px;
                                    border-bottom:1px solid #e3e3e3;
                                    color:#333333;
                                    font-size:14px;
                                ">
                                    ${name}
                                </td>
                            </tr>


                            <!-- EMAIL -->

                            <tr>
                                <td width="150"
                                    style="
                                        padding:15px 16px;
                                        background:#f8f8f8;
                                        border-bottom:1px solid #e3e3e3;
                                        color:#ED1E25;
                                        font-size:13px;
                                        font-weight:700;
                                    ">
                                    EMAIL
                                </td>

                                <td style="
                                    padding:15px 16px;
                                    border-bottom:1px solid #e3e3e3;
                                    color:#333333;
                                    font-size:14px;
                                ">
                                    ${email}
                                </td>
                            </tr>


                            <!-- PHONE -->

                            <tr>
                                <td width="150"
                                    style="
                                        padding:15px 16px;
                                        background:#f8f8f8;
                                        border-bottom:1px solid #e3e3e3;
                                        color:#ED1E25;
                                        font-size:13px;
                                        font-weight:700;
                                    ">
                                    PHONE
                                </td>

                                <td style="
                                    padding:15px 16px;
                                    border-bottom:1px solid #e3e3e3;
                                    color:#333333;
                                    font-size:14px;
                                ">
                                    ${phone}
                                </td>
                            </tr>


                            <!-- SUBJECT -->

                            <tr>
                                <td width="150"
                                    style="
                                        padding:15px 16px;
                                        background:#f8f8f8;
                                        color:#ED1E25;
                                        font-size:13px;
                                        font-weight:700;
                                    ">
                                    SUBJECT
                                </td>

                                <td style="
                                    padding:15px 16px;
                                    color:#333333;
                                    font-size:14px;
                                ">
                                    ${subject}
                                </td>
                            </tr>

                        </table>


                        <!-- MESSAGE -->

                        <div style="
                            margin-top:28px;
                            padding:20px;
                            background:#fffaf2;
                            border-left:4px solid #CDA267;
                        ">

                            <div style="
                                color:#111111;
                                font-size:14px;
                                font-weight:700;
                                margin-bottom:10px;
                            ">
                                MESSAGE
                            </div>

                            <div style="
                                color:#555555;
                                font-size:14px;
                                line-height:1.7;
                                white-space:pre-line;
                            ">
                                ${message}
                            </div>

                        </div>

                    </td>
                </tr>


                <!-- FOOTER -->

                <tr>
                    <td style="
                        background:#111111;
                        padding:22px 35px;
                    ">

                        <table width="100%" cellpadding="0" cellspacing="0" border="0">

                            <tr>

                                <td align="left">

                                    <div style="
                                        color:#ffffff;
                                        font-size:14px;
                                        font-weight:700;
                                    ">
                                        N.M. Enterprises
                                    </div>

                                    <div style="
                                        color:#999999;
                                        font-size:12px;
                                        margin-top:5px;
                                    ">
                                        RMC &amp; Concrete Equipment Solutions
                                    </div>

                                </td>

                                <td align="right">

                                    <div style="
                                        color:#CDA267;
                                        font-size:12px;
                                        font-weight:600;
                                    ">
                                        CONTACT ENQUIRY
                                    </div>

                                </td>

                            </tr>

                        </table>

                    </td>
                </tr>


                <!-- BOTTOM GOLD LINE -->

                <tr>
                    <td style="
                        height:4px;
                        background:#CDA267;
                        font-size:0;
                        line-height:0;
                    ">
                        &nbsp;
                    </td>
                </tr>

            </table>

        </td>
    </tr>

</table>
`
        });


        console.log("EMAIL SENT SUCCESSFULLY");


        // ===============================
        // SUCCESS RESPONSE
        // ===============================

        return res.status(200).json({

            success: true,

            message: "Your form submitted successfully."

        });


    } catch (error) {

        console.error("MAIL ERROR:", error);

        return res.status(500).json({

            success: false,

            message: "Mail failed. Please try again."

        });

    }

};


// ===============================
// EXPORT
// ===============================

module.exports = {
    getAllContact,
    sendContactMail
};

