curl -X POST http://localhost:8080/spring-rabbit-producer/message/send \
     -H "Content-Type: application/json" \
     -d '{"message": "Hello World"}'
