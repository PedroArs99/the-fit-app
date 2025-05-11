# FROM quay.io/quarkus/ubi9-quarkus-mandrel-builder-image:jdk-21 as builder
#
# WORKDIR /app
#
# COPY . .
#
# RUN ls -al
#
# RUN ./gradlew quarkusBuild -Dquarkus.native.enabled=true -Dquarkus.native.container-build=true --no-daemon

FROM quay.io/quarkus/ubi9-quarkus-micro-image:2.0 as runner

WORKDIR /work/

RUN chown 1001 /work
#     && chmod "g+rwX" /work \
#     && chown 1001:root /work

# COPY --chown=1001:root --chmod=755 target/*-runner /work/application
COPY /build/*-runner /work/application

EXPOSE 8080
USER 1001

ENTRYPOINT ["./application", "-Dquarkus.http.host=0.0.0.0"]