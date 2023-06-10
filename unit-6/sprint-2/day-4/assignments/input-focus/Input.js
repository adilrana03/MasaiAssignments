function App(props) {
        const InputRef = React.useRef(null);
         
        const handleClick = ()=>{
            InputRef.current.focus();
        }
    
        return (
            <div style={{width:"20%",margin:"auto",padding:"30px",boxShadow:"0 0 10px black"}}>
                <h1>Input Focus</h1>
                <input type="text" placeholder="Enter text" ref={InputRef}/><br></br>
                <button onClick={handleClick}>Click to focus on input box</button>
            </div>
        );
    }
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App/>)