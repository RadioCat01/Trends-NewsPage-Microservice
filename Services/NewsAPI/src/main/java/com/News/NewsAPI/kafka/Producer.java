package com.News.NewsAPI.kafka;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Producer {

    private final KafkaTemplate<String,UserHistoryDTO> kafkaTemplate;

    public void sendMessage(UserHistoryDTO userHistory){

        Message<UserHistoryDTO> message = MessageBuilder.withPayload(userHistory)
                .setHeader(KafkaHeaders.TOPIC, "news").build();

        System.out.println(message);

        kafkaTemplate.send(message);

    }

}
