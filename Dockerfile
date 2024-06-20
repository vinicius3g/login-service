FROM node:21-slim

RUN apt update

WORKDIR /home/node/app

CMD tail -f /dev/null