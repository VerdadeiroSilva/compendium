
FROM nginx:alpine

# Setting resource quota
ARG MIN_MEM=2G
ARG MAX_MEM=2G

#Adding Labels of build
LABEL maintainer="Arthur Henrique Verdadeiro Silva <github.com/VerdadeiroSilva>"


COPY /html /usr/share/nginx/html/
# CMD (! pidof nginx) || sudo kill -9 $(pidof nginx)
