// Write Code here
// do a default export

// export default function Image({title,src,alt,width,height}) {
//         return (
//           <div  style={{boxShadow:"0 0 10px black",margin:"auto",textAlign:"center",padding:"10px",height:"450px",width:"80%"}}>
//               <h2>{title}</h2>
//               <img src={src} alt={alt} width={width} height={height}/>
//           </div>
//         )
//       }

export default function Image({ title, src, alt, width, height }) {
	return (
		<div>
			<h2>{title}</h2>
			<img src={src} alt={alt} width={width} height={height} />
		</div>
	);
}
