package com.News.NewsAPI.finance;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class AlphaVantageResponse {

    @JsonProperty("Meta Data")
    private MetaData metaData;

    @JsonProperty("Time Series (1min)")
    private Map<String, TimeSerisdata> timeSeries;

}
