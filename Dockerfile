# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary files for dependency installation
COPY package*.json ./

# Install the app dependencies
# RUN npm ci --legacy-peer-deps
# COM ESTA OPCAO COMENTADA, PRECISAMOS DE TER

# Copy only the necessary files for the build
COPY . /app

RUN npm install

# Build
RUN npm run build

# Start the app for production
CMD ["npx", "serve@latest", "out"]