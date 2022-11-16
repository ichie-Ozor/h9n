import React from 'react'
import Pix from './img/github.svg'
import Pic from "./img/slack.png"

function footer() {
  return (
    <>
      <img src={Pix} alt="my pix" className="git" />
      <img src={Pic} alt="my pix" className="slack" />
    </>
  );
}

export default footer