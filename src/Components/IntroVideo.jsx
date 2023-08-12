import React from 'react'
import video from "../Assets/assets/MBA Chai Wala.mp4"

function IntroVideo() {
  return (
    <div className="intro">IntroVideo
    <video src={video}muted autoPlay loop controlsList="nodownload" ></video>
    </div>
  )
}

export default IntroVideo