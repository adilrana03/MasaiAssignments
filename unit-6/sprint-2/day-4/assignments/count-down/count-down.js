function Timer(props) {
        const [count,setCount] = React.useState(0);
        const ref = React.useRef(null);
    
        React.useEffect(()=>{
            return ()=>{
                clearInterval(ref.current);
            }
        },[])
    
        const start = ()=>{
            if(ref.current !== null)
            return;
    
           ref.current =  setInterval(()=>{
                setCount(prev=>prev+1);
            },1000)
        }
    
        const stop = ()=>{
            clearInterval(ref.current);
            ref.current = null;
        }
    
        const reset = ()=>{
           clearInterval(ref.current);
           ref.current = null;
           setCount(0);
        }
    
        return (
            <div style={{width:"30%",margin:"auto",textAlign:"center",padding:"30px",boxShadow:"0 0 10px black"}}>
                <h1>Count Timer Down</h1>
                <h3>Count Value is {count}</h3>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
    
        );
    }
    
    function App(props) {
        return (
            <div>
                <Timer/>
            </div>
        );
    }
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App/>)