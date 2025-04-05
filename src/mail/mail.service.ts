import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/sendMail.dto';

@Injectable()
export class MailService {

    constructor(private _mailerService: MailerService) { }

    sendContactEmail(sendEmailDto: SendEmailDto) {
        const text = `<b>EMAIL DE CONTATO:</b>${sendEmailDto.from}<br /><br />${sendEmailDto.text}`
        this._mailerService.sendMail({
            to: process.env.TO_GMAIL,
            subject: "NOVO CONTATO VIA WEBSITE",
            text: text,
            html: text,
        })
    }
}
