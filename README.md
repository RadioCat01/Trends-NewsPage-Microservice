
![Screenshot 2024-07-29 234111](https://github.com/user-attachments/assets/9e8c5ef6-1bb3-4bc6-911a-0d8a481c3b33)

# Personalized News and Trends Dashboard
### Description 
Trends(TM) - Personalized News and Trends Dashboard that provides topics under user preferences, search news, keep track of user clicks, analyze the clicked news to update preferences. ( Some functionalities may not have followed the best practices as this project is for learning purposes ) 

   #### User Profiles and Preferences:
Users are managed through keycloak security, upon registration and loging user preferences are taken and persisted and laterly updated based on user's news views.

   #### News Aggregation:
Integrated NewsAPI to get real-time and up-to-date news and trends, WebFlux webclient to handle asynchronous data fetching from API.

   #### Interactive Dashboard:
User friendly and highly responsive UI developed upon spring reactive programming, real time news refresing, page updates and user preference updates.
        
---
### Microservices Architecture

####  User Service:
Spring web application to persist and manage user preferences. Uses spring data JPA with jdbc.

####  News Service:
Spring webflux Reactive application to communicate with NewsAPI via webclient, uses endpoint polling, kafka and websocket for communication.

####  History Service:
Spring webflux Reactive application to manage user interests and news click histories, communicates with http endpoints, webclient, websocket and kafka.
Uses spring data R2DBC for data persistance.

#### Config service:
For managing configurations of other services.

#### Discovery service:
Uses Netflix Eureka fot dynamic detection and handling load balancing and realated tasks.
        
---
### Technology Stack
    Backend: Spring, Spring Boot, Spring Boot Reactive Programming, Spring Data JPA, Spring Data R2DBC, Webclient, Websocket, Kafka, ELK Stack, Zipkin, PostgreSQL, Keycloak, Spring Security
    Frontend: Angular, TypeScript
    APIs: NewsAPI
---









