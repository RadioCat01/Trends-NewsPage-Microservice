package com.News.History.kafka;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class ConsumerConfig {
    @Bean
    public NewTopic newsTopic(){
        return TopicBuilder.name("news").build();
    }

}
