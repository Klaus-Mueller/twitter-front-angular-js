
## How It Works

1. **Login Page**: Allows users to log in with their email and password.
2. **Home Page**: Displays tweets from the users the logged-in user is following.
3. **Tweet List**: Shows the text of the tweets and the name of the user who tweeted.

## Technologies Used

- **AngularJS**: The primary framework used for building the frontend.
- **Angular Material**: Used for styling and UI components.
- **Node.js**: JavaScript runtime used for managing the project's dependencies.
- **Docker**: For containerization.
- **Nginx**: Used as a web server.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Klaus-Mueller/twitter-front-angular-js
    cd twitter-front-angular-js
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

## Configuration

The application can be configured using the following environment variables:

- **PORT**: The port on which the application will run.
- **API_URL**: The base URL of the backend API.

## Deployment

You can deploy the application using Docker. The provided `dockerfile` and `nginx.conf` are configured to build and serve the Angular application using Nginx.

## File Overview

### index.html

The main HTML file which includes the AngularJS scripts and serves as the entry point for the application.

### src/app/

Contains the AngularJS application modules, configurations, and controllers.

- **app.module.js**: Defines the main AngularJS module.
- **app.config.js**: Contains the route configurations.
- **app.controller.js**: Main controller for the application.

### src/app/home/

- **home.controller.js**: Controller for the Home view.
- **home.html**: Template for the Home view.
- **home.css**: Styles for the Home view.

### src/app/login/

- **login.controller.js**: Controller for the Login view.
- **login.html**: Template for the Login view.

## Styling

Styles for the application are defined in `home.css` and can be extended as needed.

## API Endpoints

- **Login**: `POST /login`
- **Logout**: `GET /logout`
- **Get User**: `GET /getUser`
- **Save User**: `POST /saveUser`
- **Follow User**: `POST /followUser`
- **Unfollow User**: `POST /unfollowUser`
- **Get Followers**: `GET /getFollowers`
- **Get Following**: `GET /getFollowing`
- **Update User**: `POST /updateUser`
- **Search Users**: `GET /searchUsers`
- **Save Tweet**: `POST /saveTweet`
- **Get User Tweets**: `GET /getUserTweets`
- **Like Tweet**: `POST /likeTweet`
- **Unlike Tweet**: `POST /unlikeTweet`
- **Delete Tweet**: `POST /deleteTweet`
- **Timeline**: `GET /timeline`
