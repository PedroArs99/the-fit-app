package space.termite.application;

import jakarta.enterprise.context.ApplicationScoped;
import space.termite.InputObject;
import space.termite.OutputObject;

@ApplicationScoped
public class ProcessingService {

    public static final String CAN_ONLY_GREET_NICKNAMES = "Can only greet nicknames";

    public OutputObject process(InputObject input) {
        if (input.getName().equals("Stuart")) {
            throw new IllegalArgumentException(CAN_ONLY_GREET_NICKNAMES);
        }
        String result = input.getGreeting() + " " + input.getName();
        OutputObject out = new OutputObject();
        out.setResult(result);
        return out;
    }
}
