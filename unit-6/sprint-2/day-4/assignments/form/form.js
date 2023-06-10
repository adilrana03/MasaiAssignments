function Form(props) {
        const [data,setData] = React.useState({});
        const ref = React.useRef(null);
        const [input,setInput] = React.useState({
            name : "",
            gender : "",
            role : "",
            marital : "",
        });
      
        const handleChange = (e)=>{
            let flag;
              if(ref.current.checked){
                 flag = "Yes"
              }
              else{
                flag = "No"
              }
    
             setInput({
                ...input,
                [e.target.name]:e.target.value,
                marital : flag
             })
        }
    
    
        const handleSubmit = (e)=>{
            e.preventDefault();
          setData(input);
        }
    
        return (
            <div>
                <div style={{width:"20%",margin:"auto",boxShadow:"0 0 10px black",padding:"25px"}}>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name here" name ="name" onChange={handleChange}/><br/>
            <select onChange={handleChange} name="gender">
                <option>gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select><br/>
            <select onChange={handleChange} name="role">
                <option>role</option>
                <option>Dancing</option>
                <option>Singing</option>
                <option>Playing</option>
            </select><br/>
            <input type="checkbox" ref={ref} onChange={handleChange}/>Marital Status<br></br>
            <input type="submit" />
            </form>
            </div>
            <div style={{width:"30%",padding:"20px",boxShadow:"0 0 10px red",margin:" 40px auto",textAlign:"center"}}>
            <h1>Details</h1>
            <h3>Name  :  {data.name}</h3>
            <h3>Gender  :  {data.gender}</h3>
            <h3>Role  :  {data.role}</h3>
            <h3>Marital Status  :  {data.marital}</h3>
            </div>
            </div>
        );
    }
    
    
    function App(props) {
        return (
            <div>
                <Form/>
            </div>
        );
    }
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App/>)