package com.app.security.services;

import javax.mail.MessagingException;

import com.app.pojos.Mail;

public interface MailService {
    void sendMail(String recipent);
}