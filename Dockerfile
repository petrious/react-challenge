# Use the official Node.js LTS (Long Term Support) image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire source code to the working directory
COPY . .

# Build the Next.js application for production
RUN npm run build

# Copy de build file to app folder
COPY .next ./
# Expose the port on which the application will run inside the container
EXPOSE 3000

# Command to start the production server
CMD ["npm", "start"]
