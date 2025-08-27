# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port inside container
EXPOSE 3000

# Start app
CMD ["node", "server.js"]
