# Step 1: Build the app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app for production
RUN npm run build

# Step 2: Serve the app
FROM nginx:alpine

# Copy the build output from the build stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port the app will be running on
EXPOSE 3030

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
