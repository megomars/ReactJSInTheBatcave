import SayHi from "./components/SayHi"


function Scrimba(props){
        return (
            <div>
                <h1>Hello {props.name}</h1>
                <SayHi name="Bob"/>
            </div>
        );
}     
ReactDOM.render(
    <Scrimba message="scrimba you classless component"/>,
    document.getElementById("app")
);
