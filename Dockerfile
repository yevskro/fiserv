FROM node:12
WORKDIR /fiserv
COPY package.json /fiserv
RUN yarn install
COPY . /fiserv
EXPOSE 80
CMD ["yarn", "run-prod-docker"]