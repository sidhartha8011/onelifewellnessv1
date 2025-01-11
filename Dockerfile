# Use official node image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Vite project
RUN npm run build

# Expose the port that the Vite app will run on
EXPOSE 3000

# Serve the app
CMD ["npm", "run", "preview"]
