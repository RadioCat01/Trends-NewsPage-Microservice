package com.example.Gateway;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

public class TokenFilter implements WebFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        System.out.println("TokenFilter invoked");

        return exchange.getPrincipal()
                .cast(Authentication.class)
                .flatMap(auth -> {
                    if (auth instanceof JwtAuthenticationToken jwtAuth) {
                        System.out.println("JWT token found");
                        Jwt jwt = jwtAuth.getToken();

                        // Extract claims directly
                        String userId = jwt.getClaimAsString("sub");

                        // Log the extracted claims
                        System.out.println("User ID: " + userId);

                        ServerWebExchange mutatedExchange = exchange.mutate()
                                .request(r -> r.headers(headers -> {
                                    headers.add("User-ID", userId);
                                }))
                                .build();

                        return chain.filter(mutatedExchange);
                    } else {
                        System.out.println("JwtAuthenticationToken not found");
                        return chain.filter(exchange);
                    }
                }).switchIfEmpty(chain.filter(exchange));
    }

}
