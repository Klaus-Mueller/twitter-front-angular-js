# Use the official Nginx image from Docker Hub
FROM nginx:latest

# Copy the AngularJS app to the Nginx html directory
COPY src /usr/share/nginx/html

# Copy the Nginx configuration file
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
