# ReactJS in the Batcave

* React is mostly the V in the MVC framework (The data is the **MODEL**, or the real world thing; The **VIEW** is how the reader interacts or sees your app; The **CONTROLLER** is the bridge between the **MODEL** and the **VIEW**, it decides what to do with input.)
* There are three building blocks in React:
    * Components
    * State
    * Props

* The easiest way to just play around with react is to use the following boilerplate code:
```HTML
<html>
<head>
<script src="https://unpkg.com/react@15/dist/react.min.js"> </script><script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js">
</script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>
    <script type="text/babel">
    /* 
    ADD REACT CODE HERE 
    */
    </script>
</body>
</html>
```

* The easiest way to setup a React environment to to use the create-react-app command

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

## Components
Everything in React is a component. They usually take the form of JavaScript classes. Here is a simple component which extends the react-component class. Once you create a component you should define its methods. In the example below we just want to render something on screen.
``` Javascript
class Hello extends React.Component{
    render(){
        return <h1>Hello!</h1>;
    }
}
//To use the component we use the ReactDOM.render() function.
ReactDOM.render(
    <Hello />, 
    document.getElementById("app")
);
```

## Props
Props are external way of passing data
``` Javascript
class Hello extends React.Component{
    render(){
        return <h1>Hello {this.prop.message}</h1>;
        // Here we have to tell JSX that we want to add a JS expression so we escape it.
    }
}
ReactDOM.render(
    <Hello message="my prop"/>, 
    document.getElementById("app")
);
```

## State
The state can be changed by the component itself.