import video from "../data/video.js";
import Buttons from "./Buttons.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);
  return (
    <>
      <Video videoObject={video} />
      <Buttons videoObject={video} />
    </>
  );
}

export default App;
