import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/sendMail.dto';

@Injectable()
export class MailService {

    constructor(private _mailerService: MailerService) { }

    sendContactEmail(sendEmailDto: SendEmailDto) {
        const text = `EMAIL DE CONTATO: ${sendEmailDto.from} \n\n ${sendEmailDto.text}`
        this._mailerService.sendMail({
            to: process.env.TO_GMAIL,
            subject: "NOVO CONTATO VIA WEBSITE",
            text: text,
        })
    }
}
