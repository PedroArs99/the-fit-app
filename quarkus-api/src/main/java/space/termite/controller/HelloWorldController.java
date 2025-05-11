package space.termite.controller;

import io.quarkus.vertx.web.Route;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class HelloWorldController {

    @Route(path = "/hello-world", methods = Route.HttpMethod.GET)
    String hello() {
        return "Hello Vert.X";
    }
}
