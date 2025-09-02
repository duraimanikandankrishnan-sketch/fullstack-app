package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import java.util.Map;


@RestController
@RequestMapping("/data")
public class DataController {

    @GetMapping
    public ResponseEntity<Map<String, String>> getData() {
        return ResponseEntity.ok(Map.of("message", "Hello from Spring Boot1!"));
    }
}
