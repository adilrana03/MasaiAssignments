function Timer(props) {
        const [count,setCount] = React.useState(0);
        const ref = React.useRef();
    
        React.useEffect(()=>{
           ref.current = setInterval(()=>{
               setCount(prev=>prev+1);
            },1000)
            return ()=>{
                clearInterval(ref.current);
            }
    
        },[])
    
        return (
            <div className='box'>
            <h1>GARBAGE COLLECTOR</h1>
            <h2>Counter is {count}</h2>
            </div>
        );
    }
    
    function App(props) {
        const [flag,setFlag] = React.useState(false);
    
        return (
            <div style={{textAlign:"center"}}>
            {
                flag === true ? <Timer/> : <h1>Click Button to Render Component</h1>
            }
                <button onClick={()=>setFlag(!flag)}>{flag ? "Hide-Component" : "Show-Component"}</button>
            </div>
        );
    }
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App/>)