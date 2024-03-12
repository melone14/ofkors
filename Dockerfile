FROM node:18.17.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the app's source code to the container
COPY . .

ENV NEXT_PUBLIC_APP_URL=https://ofkors-frontend-app-7rsseftt4a-ey.a.run.app

# Build the Next app
RUN yarn install
RUN yarn build

# Serve the production build
CMD ["yarn", "start"]