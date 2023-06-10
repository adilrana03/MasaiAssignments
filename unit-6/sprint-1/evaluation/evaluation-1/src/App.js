import "./styles.css";
import Heading from "./Components/Heading";
import Image from "./Components/Image";
import PlayPause from "./Components/PlayPause";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Image alt="Logo" src="https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" height="400px" width="50%" title="Ronaldo" />
      <PlayPause />
    </div>
  );
}

// const QuestionDescription = () => {
//   return (
//     <div>
//       <li>
//         {/* <b>Heading.jsx</b> */}
//       </li>
//       <p>
//         You need to create a component called Heading. This component will need
//         to have an h1 tag, and have its text content as Masai School{" "}
//       </p>
//       <li>
//        {/* {Image(
//                 "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg",
//                 "Rajiv",
//                 "Male"
//               )} */}
//         {/* {<Image />}  */}
//         {/* <b>Image.jsx</b> */}
     


//       </li>
//       <p>
//         You need to create an Image component which accepts the following
//         properties / props
//         <li>title</li>
//         <li>src</li>
//         <li>alt</li>
//         <li>width</li>
//         <li>height</li>
//         You need to pass the title to an h2 tag.
//         <br />
//         You need to create an image tag, which has the width, height, image
//         source, and the alternate text passed to the image element
//       </p>
//       <li>
//         {" "}
//         <b>PlayPause.jsx</b>
//       </li>
//       <p>
//         Create a component called PlayPause. <br />
//         The component should have two elements, an h1 tag and another button
//         element.
//         <br />
//         The h1 tag should have the title <b>The state is paused</b> by default.
//         There should be a button, which has the text <b>paused</b>.
//         <br />
//         Heading 1 - <b>The state is paused</b>
//         <br />
//         Button text - <b>paused</b>
//         <br />
//         <br />
//         When you <b>click</b> on the button, then the state should change, and
//         the h1 tag should now change to <br />
//         Heading 1 - <b>The state is playing</b>
//         <br />
//         Button text - <b>playing</b>
//       </p>
//     </div>
//   );
// };
