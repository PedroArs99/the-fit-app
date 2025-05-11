# The Fit App Quarkus API

## How to build as Container Image
```shell
./gradlew build -Dquarkus.native.enabled=true -Dquarkus.native.container-build=true
docker build -t termite.space/the-fit-app:x.x.x 
```

## Useful guides and docs
* [AWS Lambda](https://quarkus.io/guides/aws-lambda)
* [Building a Native Executable](https://quarkus.io/guides/building-native-image#configuring-graalvm)
* [Container Images](https://quarkus.io/guides/container-image#building)