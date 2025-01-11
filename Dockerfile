# Use the official Node.js runtime as the base image
# FROM node:18.17.0

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18.18.0 as build


# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the Vite React project
RUN npm run build

FROM nginx as prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
