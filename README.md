# Personalized News and Trends Dashboard
### Description

Create a personalized dashboard that aggregates and displays real-time news, trends, and insights based on user preferences. This platform can provide users with a tailored experience by offering content that matches their interests, including news articles, social media trends, stock market updates, and more.
Key Features

   #### User Profiles and Preferences:
   Allow users to create profiles and select their interests (e.g., technology, sports, finance, entertainment).
        Save preferences using a user profile microservice backed by a R2DBC-enabled PostgreSQL database.

   #### News Aggregation:
Integrate NewsAPI to fetch the latest news articles based on user interests.
Use WebFlux to handle asynchronous data fetching and provide a responsive UI.

   #### Real-Time Trends:
 Integrate with the Twitter API to display trending tweets and hashtags.
        Use Kafka to stream real-time trend data and updates to the dashboard.

   #### Stock Market Updates:
 Integrate with a stock market API (e.g., Alpha Vantage or IEX Cloud) to display real-time stock prices and market news.
        Allow users to create watchlists and get alerts on significant price changes.

   #### Weather Updates:
Integrate with a weather API (e.g., OpenWeatherMap) to provide current weather conditions and forecasts.
        Customize weather updates based on user location.

   #### Notifications and Alerts:
Send real-time notifications and alerts for breaking news, stock market changes, and trending topics using Kafka.
        Allow users to customize their notification preferences.

   #### Interactive Dashboard:
Design a user-friendly and interactive dashboard using modern front-end technologies (e.g., Angular or React).
        Display data in various formats, such as cards, charts, and graphs.
        
---
### Microservices Architecture

####  User Service:
Manages user profiles, preferences, and authentication.
        Uses R2DBC for reactive database interactions.

####  News Service:
 Fetches news articles from NewsAPI based on user preferences.
        Handles data processing and filtering.

####  Trends Service:
 Streams real-time trends from Twitter and other social media platforms.
        Uses Kafka for real-time data processing and distribution.

#### Stock Market Service:
Integrates with stock market APIs to fetch real-time stock prices and news.
        Manages user watchlists and alerts.

 ####  Weather Service:
Fetches weather data from OpenWeatherMap or similar APIs.
        Provides location-based weather updates.

  ####  Notification Service:
Manages real-time notifications and alerts using Kafka.
        Customizes notifications based on user preferences.
        
---
### Technology Stack
  Backend: Spring Boot WebFlux, R2DBC, Kafka
    Frontend: Angular or React
    APIs: NewsAPI, Twitter API, Alpha Vantage or IEX Cloud, OpenWeatherMap
    Database: PostgreSQL with R2DBC

### Additional Enhancements

  ####  Machine Learning Integration:
 Use machine learning to analyze user behavior and improve content recommendations.
        Implement sentiment analysis on news articles and social media trends.

   #### Social Sharing:
Allow users to share interesting articles and trends on social media platforms.

  ####  Mobile App:
 Develop a mobile app version of the dashboard for Android and iOS.

This project combines various technologies and APIs to create a comprehensive and engaging platform for users to stay informed about their interests.


---
# Development

### MicroService Architecture

#### Config + Discovery 

---
#### Gateway
Configured the security chain and filter to pass the Keycloak Id in passing request's header

      Oauhth2 Resource Server
      Spring WebFlux
      Reactive Gateway
      + + + +

#### User
Accepts Request with preferences in request body and headers to save user ( if not already exists )

      Data JPA
      Spring Web
      PostgreSQL
      + + + + 


### Frontend
configured keycloak service, token Inteceptor, Auth Guard to work with key cloak 

#### NewsAPi
used web client to fetch news from news api

#### FinanceAPI
used web client to fetch finance data from finance api.

#### History service
history service gets data from news service through kafka, and persists on postgresql database via r2dbc.
then fetched and sent to frontend on request via websocket, and keep updating on user clicks 

#### ELK Stack
Dockerized Elastic search, Logstash, Kibana and logstash.conf







