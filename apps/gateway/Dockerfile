FROM node:16.5.0-alpine3.14
WORKDIR /app
COPY ./dist/apps/gateway .
ENV PORT=3001
EXPOSE ${PORT}
RUN npm install --production
RUN npm install pg # Implicit npm package to install
CMD ["node", "main"]
