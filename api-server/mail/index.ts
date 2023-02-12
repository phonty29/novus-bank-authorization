import ApiRoutes from '@utils/enums/ApiRoutes';
import nodemailer, { Transporter } from 'nodemailer';

class MailService {
    transporter: Transporter;
    service: string = "Gmail";

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: this.service, 
            auth: {
              user: process.env.MAIL_USER, 
              pass: process.env.MAIL_PASSWORD,
            },
        });
    }

    async sendActivationLink({toEmail, userId}: {toEmail: string, userId: string}) { 
        let activationLink = `${process.env.BASE_URL}${ApiRoutes.REGISTRATION_ACTIVATE}/${userId}`;
        await this.transporter.sendMail({
          from: `"Bekonomix 👻" <${process.env.MAIL_USER}>`,
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
