const Para = ()=>{
        return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe
        recusandae eveniet eligendi esse commodi at molestias et id nostrum
        laborum eaque, similique laudantium aliquam soluta incidunt laboriosam
        voluptatibus tempore voluptatem cumque facere assumenda libero sapiente!
        Nulla quae sapiente animi illo labore exercitationem voluptatum ipsa
        dolores. Sed nulla quas esse quasi sapiente nostrum accusamus, dolorem
        quos optio illum quo veritatis cumque ipsa earum provident minima aliquid
        at deserunt? Quasi unde minima assumenda iure, voluptatum delectus minus.
        Sed provident adipisci nemo rerum ducimus velit incidunt minima cupiditate
        consequatur! Corporis distinctio sequi sciunt obcaecati? Nemo culpa
        earum tenetur id libero ab aut consequuntur asperiores cum hic vero illo
        excepturi, similique aliquid recusandae distinctio dolore. Quos cumque
        eaque laborum tenetur consequuntur, quia qui necessitatibus minus totam
        modi non quis. Delectus dolorum officia fuga, veniam at temporibus optio!
        Vero cupiditate quibusdam illum optio distinctio numquam, nobis molestias
        consectetur, quo officia beatae. Optio in quibusdam quisquam reiciendis,
        sit similique. Ullam neque animi maxime excepturi veritatis nulla dolores
        praesentium laboriosam dolor error natus corporis adipisci nihil doloribus
        a, commodi corrupti minus?
          </p>
    }
    
    const Child = ()=>{
        return <div className="child"><Para/></div>
    }
    
    const Scroll = ()=>{
        let ref = React.useRef(null);
    
        const Scrolltop = ()=>{
            window.scrollTo(0,0)
        }
    
        const Scrollbottom = ()=>{
            window.scrollTo(0,document.body.scrollHeight);
        }
    
        return <div>
            <button onClick={Scrollbottom}>Scroll To Bottom</button>
            <div className="parent">
            <h1>Scroll Container</h1><hr></hr>
            <Para/><hr></hr>
            <Para/><hr></hr>
            <Para/><hr></hr>
            <Para/><hr></hr>
            <Para/><hr></hr>
        </div>
         <Child/>
         <button onClick={Scrolltop}>Scroll to Top</button>
        </div>
    }
    
    const App = ()=>{
        return <div><Scroll/></div>
    }
    
    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App/>)