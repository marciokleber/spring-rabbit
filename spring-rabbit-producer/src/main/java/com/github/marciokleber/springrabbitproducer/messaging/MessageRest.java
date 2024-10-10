package com.github.marciokleber.springrabbitproducer.messaging;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/message")
public class MessageRest {
    private final ProducerService producer;

    public MessageRest(ProducerService producer) {
        this.producer = producer;
    }

    @PostMapping("/send")
    public String sendMessage(@RequestBody String message) {
        producer.sendMessage(message);
        return "Mensagem enviada para o RabbitMQ!\n";
    }
}
