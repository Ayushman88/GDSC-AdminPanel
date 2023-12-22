# GDSC-AdminPanel


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

## Instruction: Components

### Auth

- Auth: A Firebase service for handling user authentication and authorization.

### Pages

- Home: The home page component displays the GDSC logo and an "Enter" button that triggers Google sign-in.

- Leaderboard: The leaderboard page allows the admin to manage user points and functions. It includes a form for adding points and a dropdown for navigation.

- SignOut: Component for signing out the admin user.

- Stocks: The stocks page allows the admin to manage product stocks. It includes a form for adding stocks and an image upload feature.

### Components

- AdminLoginButton: A component that handles Google sign-in authentication for the admin user.

- LeaderboardDropdown: A dropdown component for navigation within the leaderboard page.

- StockDropdown: A dropdown component for navigation within the stocks page.

- UploadImage: A component for uploading and cropping images.

### Firebase Configuration

- firebaseConfig.js: A file containing the Firebase configuration and initialization of the Firebase app with the necessary authentication and provider.

### Tailwind CSS

- Tailwind CSS: A utility-first CSS framework for styling the application.

- tailwind.config.js: A configuration file that specifies the content and theme for the Tailwind setup.

For detailed information on Tailwind CSS classes used in components, refer to the respective component files.

