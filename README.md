# Folder structure
The folder structure commonly used in create react app is following
src/
	actions/
		CommandActions.js
		UserActions.js
	components/
		Header.js
		Sidebar.js
		Command.js
		User.js
		UserProfile.js
		UserAvatar.js
	containers/
		App.js
		Command.js
		User.js
	reducers/
		index.js
		command.js
		user.js
	routes.js

But in this folder structure, the components directory becomes huge and all the components are present in one folder. This structure becomes difficult to maintain when multiple teams are working simultaneously on many components as they have to touch same folders everytime

The folder structure I have used is called domain separated folder structure where in each team can work on one domain and it will have its own separate folder. Each domain is like a small react app in itself. This is scalable when both the app and the teams increase in size

src/
	details/     (it contains all the components, actions, reducers, tests for game details page)
		
		components/
		actions/
		reducers/
		index.js.    ( all the components related to details page are combined here and this is the file exported to the react router)
		
	home/ (this folder contains all the components, actions, reducers tests related to home page)
		
		index.js.       (all the components related to home page are combined here and this is the file exported to the react router)
		
		components/

			category/
				styles.css
				index.js.   //this is the container component where redux hooks are used
				CategoryView.js.   //this is the presentation component which is depenednt only 	on props passed to it. Easy for mocking and unit testing
				CategoryView.test.js.     //unit tests for presentation component

			platform/
				styles.css
				index.js.   //this is the container component where redux hooks are used
				PlatformView.js.   //this is the presentation component which is depenednt only 	on props passed to it. Easy for mocking and unit testing
				PlatformView.test.js.     //unit tests for presentation component


		actions/
			filters.js
			gameData.js

		reducers/
			filters.js
			filters.test.js.            //Unit tests for filters reducer
			gamesData.js
			gamesData.test.js.   //Unit tests for gamesdata reducer





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
