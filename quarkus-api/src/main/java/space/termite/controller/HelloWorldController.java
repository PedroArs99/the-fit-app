package space.termite.controller;

import io.quarkus.vertx.web.Route;
import io.vertx.ext.web.RoutingContext;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class HelloWorldController {

    @Route(path = "/hello-world", methods = Route.HttpMethod.GET)
    void hello(RoutingContext context) {
        context.response().headers().set("Content-Type", "text/plain");
        context.response().setStatusCode(200).end("hello vertx");
    }
}
