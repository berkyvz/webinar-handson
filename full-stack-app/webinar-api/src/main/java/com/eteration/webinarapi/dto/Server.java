package com.eteration.webinarapi.dto;

public class Server {

  private String hostName;
  private String hostPort;
  private String status;

  public Server(String hostName, String hostPort, String status) {
    this.hostName = hostName;
    this.hostPort = hostPort;
    this.status = status;
  }

  public String getHostName() {
    return hostName;
  }

  public void setHostName(String hostName) {
    this.hostName = hostName;
  }

  public String getHostPort() {
    return hostPort;
  }

  public void setHostPort(String hostPort) {
    this.hostPort = hostPort;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }



}
