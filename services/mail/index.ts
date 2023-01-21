import nodemailer, { Transporter } from 'nodemailer';
import ApiRoutes from '../../lib/enums/ApiRoutes';

const SERVICE = "Gmail";
const MAIL_AUTHOR = "Amedov Bekmuhamet";
const MAIL_USER = "amedov.bekmuhamet@gmail.com";
const MAIL_PASSWORD = "fgowujceotumljmj";

class MailService {
    transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: SERVICE, 
            auth: {
              user: MAIL_USER, 
              pass: MAIL_PASSWORD,
            },
        });
    }

    async sendActivationLink({toEmail, userId}: {toEmail: string, userId: string}) { 
        let activationLink = `${ApiRoutes.ACTIVATE_USER}/${userId}`;
        await this.transporter.sendMail({
          from: `"${MAIL_AUTHOR} 👻" <${MAIL_USER}>`,
          to: toEmail,
          subject: "Click here to activate your account in Bekonomix", 
          text: "",
          html: `<p>This is your activation link 
                  <a href=${activationLink}>${activationLink}</a>
                 </p>`,
        });
      }
}

export default new MailService();
