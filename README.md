# ReactJS in the Batcave

* React is mostly the V in the MVC framework (The data is the **MODEL**, or the real world thing; The **VIEW** is how the reader interacts or sees your app; The **CONTROLLER** is the bridge between the **MODEL** and the **VIEW**, it decides what to do with input.)
* There are three building blocks in React:
    * Components
    * State
    * Props

* The easiest way to get setup using react is to use the create-react-app command

```Javascript
npm install -g create-react-app // installs create-react-app globally
create-react-app myapp // creates a react app called myapp
cd myapp // go into that directory

yarn start // starts the development server. ( compiles app, opens new browser, monitors changes to files)
yarn build // bundles the app into static files for production.
yarn test // starts the test runner.
```
Here are the files that are created when running create-react-app myapp
![create-react-app](reactapp.png)