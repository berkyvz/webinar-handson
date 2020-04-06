package com.eteration.webinarapi;

import org.apache.log4j.BasicConfigurator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class WebinarApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebinarApiApplication.class, args);
		BasicConfigurator.configure();
	}
	
	@Value(value = "${rapidapi.application.key}")
	private String rapidKey;
	
	@Value(value = "${rapiapi.host.covid19}")
	private String rapidHost;
	
	  @Value(value = "${rapiapi.baseURL}")
	  private String baseURL;
	
	@Bean
	public RestTemplate restTemplate() {
	  return new RestTemplateBuilder()
	      .rootUri(baseURL)
	      .defaultHeader("x-rapidapi-key", rapidKey)
	      .defaultHeader("x-rapidapi-host", rapidHost)
	      .build();
	}

}
