FROM keymetrics/pm2:latest-stretch

# Bundle APP files
COPY src src/
COPY package.json .
COPY pm2.json .

# Install app dependencies
#ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
#RUN ls -al -R

#Arg environment
ARG mode
ENV environment=$mode
RUN echo $mode
CMD [ "pm2-runtime", "start", "pm2.json" ]
