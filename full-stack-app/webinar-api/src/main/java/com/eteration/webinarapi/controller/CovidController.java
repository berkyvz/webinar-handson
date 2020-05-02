package com.eteration.webinarapi.controller;

import java.net.InetAddress;
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.eteration.webinarapi.dto.Server;
import com.eteration.webinarapi.dto.Statistic;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CovidController {
  
  Logger logger = Logger.getLogger(CovidController.class);
  
  @Autowired
  RestTemplate template;
  
  @Autowired
  Environment environment;
 
  
  @GetMapping("/values")
  public ResponseEntity<Server> getValues() {
    String hostName = System.getenv("HOSTNAME");
    String hostPort = environment.getProperty("server.port");
    return ResponseEntity.ok(new Server(hostName, hostPort, "OK"));
  }

  @GetMapping("/worldstatus")
  public ResponseEntity<Statistic> getWorld() {
    logger.info("GET /worldstatus");
    return ResponseEntity.ok(template.getForObject("/statistics?country=All", Statistic.class));
  }
  
  @GetMapping("/statistics")
  public ResponseEntity<Statistic> getAllCountries() {
    logger.info("GET /statistics");
    return ResponseEntity.ok(template.getForObject("/statistics", Statistic.class));
  }
  
  @GetMapping("/statistics/{country}")
  public Statistic getWorldData(@PathVariable("country") String country) {
    logger.info("GET /statistics/"+country);
    return template.getForObject("/statistics?country="+country, Statistic.class);
  }

  
}
