# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package*.json ./
COPY index.js ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Make port configurable via environment variable
ENV PORT 3000

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run server.js when the container launches
CMD ["npm", "start"]
