FROM node:16.5.0-alpine3.14
WORKDIR /app
COPY ./dist/apps/courses .
ENV PORT=3002
EXPOSE ${PORT}
RUN npm install --production
RUN npm install pg # Implicit npm package to install
CMD ["node", "main"]
