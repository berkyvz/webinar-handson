package com.eteration.webinarapi.dto;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Response {

    @JsonProperty("country")
    private String country;
    @JsonProperty("cases")
    private Cases cases;
    @JsonProperty("deaths")
    private Deaths deaths;
    @JsonProperty("day")
    private String day;
    @JsonProperty("time")
    private String time;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("country")
    public String getCountry() {
        return country;
    }

    @JsonProperty("country")
    public void setCountry(String country) {
        this.country = country;
    }

    @JsonProperty("cases")
    public Cases getCases() {
        return cases;
    }

    @JsonProperty("cases")
    public void setCases(Cases cases) {
        this.cases = cases;
    }

    @JsonProperty("deaths")
    public Deaths getDeaths() {
        return deaths;
    }

    @JsonProperty("deaths")
    public void setDeaths(Deaths deaths) {
        this.deaths = deaths;
    }

    @JsonProperty("day")
    public String getDay() {
        return day;
    }

    @JsonProperty("day")
    public void setDay(String day) {
        this.day = day;
    }

    @JsonProperty("time")
    public String getTime() {
        return time;
    }

    @JsonProperty("time")
    public void setTime(String time) {
        this.time = time;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
