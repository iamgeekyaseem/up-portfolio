# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app (only for frontend like React/Vite)
RUN npm run build

# Install a static file server
RUN npm install -g serve

# Expose the port your app runs on
EXPOSE 3000

# Start the app using 'serve'
CMD ["serve", "-s", "dist", "-l", "3000"]
