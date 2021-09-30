package com.app.security.services;

import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.app.pojos.Mail;
import com.app.pojos.User;
import com.app.repository.UserRepository;

@Service
public class SendMailServiceImpl implements MailService {

    private final JavaMailSender javaMailSender;

    public SendMailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

@Override
public void sendMail(String recipent) {
	Mail mail=new Mail(recipent,"New products","Dear user, do check our newly added products\nhttp://localhost:3000/home");
    SimpleMailMessage msg = new SimpleMailMessage();
    msg.setTo(mail.getRecipient(), mail.getRecipient());

    msg.setSubject(mail.getSubject());
    msg.setText(mail.getMessage());

    javaMailSender.send(msg);
}
}