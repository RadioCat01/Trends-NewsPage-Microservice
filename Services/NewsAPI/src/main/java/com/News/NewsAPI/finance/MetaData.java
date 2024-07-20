package com.News.NewsAPI.finance;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MetaData {

    @JsonProperty("1. Information")
    private String information;

    @JsonProperty("2. Symbol")
    private String symbol;

    @JsonProperty("3. Last Refreshed")
    private String lastRefreshed;

    @JsonProperty("4. Interval")
    private String interval;

    @JsonProperty("5. Output Size")
    private String outputSize;

    @JsonProperty("6. Time Zone")
    private String timeZone;

}
