package com.github.marciokleber.springrabbitconsumer.messaging;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bridge")
public class BridgeController {

    private String currentColor;

    @RabbitListener(queues = RabbitMQConfig.QUEUE_NAME)
    public void consumeColor(String colorHex) {
        this.currentColor = colorHex;
    }

    @GetMapping("/color")
    public ResponseEntity<String> getColor() {
        return ResponseEntity.ok(currentColor);
    }
}
