package com.app.controllers;

import javax.mail.MessagingException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Mail;
import com.app.security.services.MailService;

@RestController
@RequestMapping("/api/test/mail")
public class MailController {
    MailService service;

    public MailController(MailService service) {
        this.service = service;
    }

    @PostMapping("/send/{recipent}")
    public ResponseEntity<String> sendMail(@PathVariable String recipent) {
        service.sendMail(recipent);
        return new ResponseEntity<>("Email Sent successfully", HttpStatus.OK);
    }

}
