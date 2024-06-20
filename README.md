# Custom Captioned Video app

This is a React application that enables users to add captions at specific timestamps to a video and play the video with these captions. It's built using React, leveraging `react-player` for video playback and `video.js` for video manipulation.

## After Adding the video
[Demo](Screenshot (67).png) 

## Features
- **Select Videos**: User can add hoisted video URLs which will be used for Video Playabak.
- **Add Captions**: Users can add captions at precise timestamps (in seconds) to the video.
- **Video Playback**: The video can be played with the added captions displayed below it.

## Installation

To run this application locally, clone the repository, install dependencies, and start the development server:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/captioned-video-react.git
   cd captioned-video-react

2. Install dependencies:

   ```bash
   npm install


3. Start the development server:
   ```bash
    npm start

4. Open http://localhost:3000 to view it in the browser.

## Usage

1. Add Captions: Enter a timestamp (in seconds) and a caption in the form provided below the video player and click "Add Caption".
2. Play Video: The video will play with the added captions displayed at their respective timestamps.
3. Modify Captions: You can modify or delete captions by editing the text directly or removing them using additional functionalities.

## Built With

- **React** - JavaScript library for building user interfaces - To allow faster and simpler application development
- **react-player** - A React component for playing various media, including video
- **video.js** - HTML5 video player library

## Future Improvements 

1. Improved UI and responsiveness of the site - Allowing better access and device friendl website
2. Different UI for added subtitles. Later on allowing below feature 
    - Sorted list of custom captions
    - Able to remove added captions
3. Editing pre-existing custom captions
4. Add some caption settings like bold text or cross-language support etc
5. Controls should be custom for the application
6. Currently when video is paused caption doesn't pause but rather vanished after system allocated time completes. This should be resolved.

## Decisions
### User Experience
   1. User should be able to add other videos hosted and add their custom captions.
   2. User shouldn't worry about adding captions at time stamps beyond the video time frame.
      - The timestamp field is number input field which can be between 0 and max time in video (in seconds).
   3. User should be able to check the custom captions he added
      - So there is a list custom captions are displayed
   4. New caption at same timestamp should replace the existing caption
   5. A caption should stay there until its completed or updated a timestamp before completion
      - So the caption will not change until every characted is completed. Used setTimeout() with caption.length seconds as waiting time. 
<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
