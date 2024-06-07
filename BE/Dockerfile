# Stage 1: Build the application
FROM gradle:7.3.3-jdk11 AS build
WORKDIR /app

# Copy Gradle wrapper and configuration files
COPY gradle /app/gradle
COPY gradlew /app/gradlew
COPY gradle/wrapper/gradle-wrapper.properties /app/gradle/wrapper/gradle-wrapper.properties

# Copy the rest of the project files
COPY build.gradle settings.gradle ./
COPY src ./src

# Run Gradle build
RUN ./gradlew build --no-daemon

# Stage 2: Run the application
FROM openjdk:11-jre-slim
WORKDIR /app

# Copy the built jar file from the build stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
