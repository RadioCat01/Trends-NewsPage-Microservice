package com.News.User.analytics;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sources")
public class AnalyticController {

    @PostMapping
    public void receiveSourceNames(@RequestBody List<String> sourceNames) {
        System.out.println("Received source names: " + sourceNames);
    }

}
