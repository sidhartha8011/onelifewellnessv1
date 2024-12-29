FROM node:18-alpine as build

# Declare build time environment variables
ARG VITE_NODE_ENV
ARG VITE_SERVER_BASE_URL

# Set default values for environment variables
ENV VITE_NODE_ENV=$VITE_NODE_ENV
ENV VITE_SERVER_BASE_URL=$VITE_SERVER_BASE_URL
# Step 1: Set up the base image

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy the rest of the project files
COPY . .

# Step 5: Build the Vite project
RUN npm run build

# Step 6: Set up a minimal server to serve the built project
FROM nginx:alpine

# Step 7: Copy the build output from the previous image
COPY --from=build /app/dist /usr/share/nginx/html

# Step 8: Expose the default port for nginx
# EXPOSE 80

EXPOSE 443

# Step 9: Start nginx server
CMD ["nginx", "-g", "daemon off;"]