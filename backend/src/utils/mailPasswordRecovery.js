import nodemailer from "nodemailer"
import {config} from "../config.js"

//configurar transportes

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user:config.email.user,
        pass: config.email.pass,
    },
    
});

const sendEmail = async(to, subject, body, html)=>{
  try {
    const info = await transporter.sendMail( {
        from: "gabspp1602@gmail.com",
        to,
        subject,
        body,
        html,
    });

    return info
    
  } catch (error) {
    console.log("error" + error)
  }
};

const HTMLRecoveryEmail = (code) => {
    return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; padding: 40px 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: #ffffff; padding: 40px 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
        <h2 style="font-size: 24px; font-weight: 600; color: #1a1a1a; margin-bottom: 20px;">Reset your password</h2>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          We've received a request to reset your password. Please use the code below to proceed:
        </p>
        <div style="margin: 30px 0;">
          <span style="display: inline-block; background-color: #1a73e8; color: #fff; padding: 14px 32px; font-size: 20px; font-weight: bold; border-radius: 6px; letter-spacing: 2px;">
            ${code}
          </span>
        </div>
        <p style="font-size: 14px; color: #777; line-height: 1.6;">
          This code will expire in <strong>15 minutes</strong>. If you did not request a password reset, please disregard this email.
        </p>
      </div>
      <p style="font-size: 12px; text-align: center; color: #999; margin-top: 30px;">
        Need help? Contact us at 
        <a href="mailto:support@example.com" style="color: #1a73e8; text-decoration: none;">support@example.com</a>
      </p>
    </div>
    `;
  };
  

export {sendEmail, HTMLRecoveryEmail};

