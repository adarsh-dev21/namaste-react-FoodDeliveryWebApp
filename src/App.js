import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 

/*<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

const parent=React.createElement("div",{id:"parent"},[

    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"heading"},"I'm h1 tag"),
            React.createElement("h2",{id:"heading2"},"I'm h2 tag")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{id:"heading"},"I'm h1 tag"),
            React.createElement("h2",{id:"heading2"},"I'm h2 tag")
        ]
    )
] 
)
    console.log(parent);

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
    */
/*
    const head = (<h1 className="head">
        Namaste React Component using JSX
        </h1>)

    const Title = () =>{
    return (<h1 className="head">
        Namaste React Functional Component using JSX
        </h1>)
    }
        const HeadingComponent = () => {            
            return( 
            <div id="container"> 
            {head}
            <Title />
            <h1 class="heading">Namaste React Functional Component calling with React Component(head)
                 & React Functional Component(Title)</h1>;
            </div>
            )
        };

// Other way of writing Functional Component
        const HeadingComponent1=() =>(
            <div id="container">                
             <h1 className="heading">Namaste React Functional Component</h1>
             </div>
        );
    */


        const AppLayout=() => {
            return (
                <div className="app">
                    <Header />
                    <Body />

                </div>
            );
        };
   
   
   
    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(<AppLayout />);


