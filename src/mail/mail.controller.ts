import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendEmailDto } from './dto/sendMail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @Post('contact')
  async send(@Body() sendEmailDto: SendEmailDto) {
    await this.mailService.sendContactEmail(sendEmailDto);
  }
}
