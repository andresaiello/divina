FROM node:8.9-slim
MAINTAINER aaiello@gmail.com

RUN apt-get -yq update && apt-get -yq install bzip2 time

WORKDIR /opt/app

ENV HOME /opt/app

COPY . /opt/app

EXPOSE 3000 3001 3002 3004
CMD ["npm", "run", "start"]
