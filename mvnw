#!/bin/sh
# Maven Wrapper script for Monamy
# Descarga Maven automáticamente si no existe

set -e

MAVEN_PROJECTBASEDIR="${MAVEN_BASEDIR:-$(cd "$(dirname "$0")" && pwd)}"
MAVEN_WRAPPER_PROPERTIES="$MAVEN_PROJECTBASEDIR/.mvn/wrapper/maven-wrapper.properties"
MAVEN_WRAPPER_JAR="$MAVEN_PROJECTBASEDIR/.mvn/wrapper/maven-wrapper.jar"

MAVEN_HOME="$MAVEN_PROJECTBASEDIR/.mvn/maven"
MAVEN_CMD="$MAVEN_HOME/bin/mvn"

if [ ! -f "$MAVEN_CMD" ]; then
    echo "Descargando Maven..."
    DIST_URL=$(grep "distributionUrl" "$MAVEN_WRAPPER_PROPERTIES" | cut -d'=' -f2)
    mkdir -p "$MAVEN_HOME"
    curl -sL "$DIST_URL" -o /tmp/maven.zip
    unzip -qo /tmp/maven.zip -d /tmp/maven-extract
    mv /tmp/maven-extract/apache-maven-*/* "$MAVEN_HOME/"
    rm -rf /tmp/maven.zip /tmp/maven-extract
    echo "Maven descargado exitosamente."
fi

export JAVA_HOME="${JAVA_HOME:-$(/usr/libexec/java_home 2>/dev/null || echo '')}"

exec "$MAVEN_CMD" "$@"
