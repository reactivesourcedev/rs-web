import nodemailer from "nodemailer";
import { NAMECHEAP_EMAIL, NAMECHEAP_EMAIL_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
  host: "premium11.web-hosting.com",
  port: 587,
  secure: false,
  auth: {
    user: NAMECHEAP_EMAIL,
    pass: NAMECHEAP_EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("SMTP Server is ready to take send your Emails.");
  }
});

export default transporter;