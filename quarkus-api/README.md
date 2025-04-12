# The Fit App Quarkus API

## How to deploy as custom (native) runtime
```shell
./gradlew build -Dquarkus.native.enabled=true
LAMBDA_ROLE_ARN="<...>" sh build/manage.sh native create
```

## Useful guides and docs
* [AWS Lambda](https://quarkus.io/guides/aws-lambda)
* [Building a Native Executable](https://quarkus.io/guides/building-native-image#configuring-graalvm)