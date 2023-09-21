# MQTT Authentication and Authorisation POC

## What is the purpose of this POC
- Experiment with [mosquitto-go-auth plugin](https://github.com/iegomez/mosquitto-go-auth) to implement JWT authentication and authorisation for MQTT broker

## Technologies used
- node.js
- mosquitto
- Docker

## Project setup
- Install Docker
- Install Docker Compose
- Install NPM

### Install packages

```bash
  npm install
```

### Service docker container

#### Docker compose

```bash
  docker compose -p mosquitto-go-auth-poc up -d
```
```bash
  docker compose -p mosquitto-go-auth-poc down
```

