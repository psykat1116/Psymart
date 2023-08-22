import React from 'react'
import { SiJirasoftware } from "react-icons/si";
import { SiBmcsoftware } from "react-icons/si";
import { SiPaloaltosoftware } from "react-icons/si";
import { AiOutlineBehance } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { TbBrandAmd } from "react-icons/tb";
import { TbBrandTerraform } from "react-icons/tb";

const Trust = () => {
  return (
    <div id='trust'>
        <p>Trusted By 100+ Companies</p>
        <div className="company">
            <label><SiJirasoftware/></label>
            <label><SiBmcsoftware/></label>
            <label><SiPaloaltosoftware/></label>
            <label><AiOutlineBehance/></label>
            <label><AiOutlineDribbble/></label>
            <label><TbBrandAmd/></label>
            <label><TbBrandTerraform/></label>
        </div>
    </div>
  )
}

export default Trust