FROM nginx:1.17.0-alpine
WORKDIR /app
COPY apps/front/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY dist/apps/front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
