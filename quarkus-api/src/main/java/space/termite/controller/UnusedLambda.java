package space.termite.controller;

import jakarta.inject.Inject;
import jakarta.inject.Named;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import space.termite.InputObject;
import space.termite.OutputObject;
import space.termite.application.ProcessingService;

@Named("unused")
public class UnusedLambda implements RequestHandler<InputObject, OutputObject> {

    @Inject
    ProcessingService service;

    @Override
    public OutputObject handleRequest(InputObject input, Context context) {
        throw new RuntimeException("Should be unused");
    }
}
