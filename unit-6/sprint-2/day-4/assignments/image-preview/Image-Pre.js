const Image = ()=>{
        let [state,setState] = React.useState("");
    
        const handleChange = (e)=>{
            setState(URL.createObjectURL(e.target.files[0]));
        }
    
        return <div style={{textAlign:"center"}}>
            <h1>Image Preview</h1>
            <input type="file" onChange={handleChange}></input>
            {state ? <img src={state} width="400px"/> : "Select image"}
        </div>
    }
    
    const App = ()=>{
        return <div><Image/></div>
    }
    
    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App/>);