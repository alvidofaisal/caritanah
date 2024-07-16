package id.co.caritanah.marketplace.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to Caritanah Marketplace!";
    }

    @GetMapping("/about")
    public String about() {
        return "Caritanah Marketplace is a platform for buying and selling local products.";
    }

    @GetMapping("/contact")
    public String contact() {
        return "Contact us at: support@caritanah.co.id";
    }
}