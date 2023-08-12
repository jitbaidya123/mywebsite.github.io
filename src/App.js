import IntroVideo from "./Components/IntroVideo"
import Section from "./Components/section.jsx"
import freshTopicImg from "./Assets/assets/academy.png"
import data from "./Data1/data.json"
import freshTopic2Img from "./Assets/assets/image2.png"
import tedTalksImg from "./Assets/assets/in-the-news.gif"
import franchiseImg from "./Assets/assets/franchise.gif"
import coursesImg from "./Assets/assets/image3.png"
import mapImg from "./Assets/assets/locations.png"
import albumImg from "./Assets/assets/mba-cares.gif"
import Footer from "./Components/footer"

import "./Styles/App.scss"
import "./Styles/intro.scss"
import "./Styles/section.scss"
import "./Styles/footer.scss"


const yellow = "#ffff00" ,red ="#ff0000" ,white ="#ffffff",brown ="#a52a2a",pink="#ed1e79";


function App() {

  const{freshTopic,freshTopic2,tedTalks,franchise,map,courses,album} = data;

  return (
 <>
    <IntroVideo />

  <Section 
  h3={freshTopic.heading} 
  text={freshTopic.text}
  btnTxt={freshTopic.btn} 
  imgSrc={freshTopicImg}
  backgroundColor={pink}
  headingColor={yellow}
  textColor={yellow}
  btnBgColor={yellow}
  btnColor={pink}
  
  
  />
    <Section 
  h3={freshTopic2.heading} 
  text={freshTopic2.text}
  btnTxt={freshTopic2.btn} 
  imgSrc={freshTopic2Img}
  backgroundColor={pink}
  headingColor={yellow}
  textColor={yellow}
  btnBgColor={yellow}
  btnColor={pink}
  
  
  />
    <Section 
  h3={tedTalks.heading} 
  text={tedTalks.text}
  btnTxt={tedTalks.btn} 
  imgSrc={tedTalksImg}
  backgroundColor={yellow}
  headingColor={pink}
  textColor={pink}
  btnBgColor={pink}
  btnColor={yellow}
  
  
  />
      <Section 
  h3={franchise.heading} 
  text={franchise.text}
  btnTxt={franchise.btn} 
  imgSrc={franchiseImg}
  backgroundColor={white}
  headingColor={pink}
  textColor={pink}
  btnBgColor={pink}
  btnColor={yellow}
  
  
  />
    <Section 
  h3={map.heading} 
  text={map.text}
  imgSrc={mapImg}
  backgroundColor={pink}
  headingColor={yellow}
  textColor={yellow}
  btnBgColor={yellow}
  btnColor={pink}
  
  
  />
      <Section 
  h3={courses.heading} 
  text={courses.text}
  btn={courses.btn}
  imgSize={"30%"}
  imgSrc={coursesImg}
  backgroundColor={pink}
  headingColor={pink}
  textColor={pink}
  btnBgColor={pink}
  btnColor={yellow}
  
  
  />
     <Section 
    h3={album.heading} 
  text={album.text}
  btnTxt={album.btn} 
  imgSrc={albumImg}
  backgroundColor={white}
  headingColor={pink}
  textColor={brown}
  btnBgColor={brown}
  btnColor={yellow}
  />
  <Footer/>
  </>
  );
}

export default App;
