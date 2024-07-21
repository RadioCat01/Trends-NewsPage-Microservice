package com.News.NewsAPI.websocket;

import com.News.NewsAPI.news.Article;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;


import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArraySet;

@Component
public class NewsWebSocketHandler extends TextWebSocketHandler {

    private final CopyOnWriteArraySet<WebSocketSession> sessions = new CopyOnWriteArraySet<>();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // Handle incoming messages if needed
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
    }

    public void broadcastNews(List<Article> articles) {
        String newsJson;
        try {
            newsJson = objectMapper.writeValueAsString(articles);
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }
        for (WebSocketSession session : sessions) {
            try {
                session.sendMessage(new TextMessage(newsJson));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}
