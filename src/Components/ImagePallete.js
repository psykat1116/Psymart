import React, { useState } from 'react'

const ImagePallete = ({ image = [{ url: "" }] }) => {
    const [mainimg, setmainimg] = useState(image[0]);

    return (
        <div id='left'>
            <div className="all-img">
                {
                    image.map((curr, ind) => {
                        return (
                            <img src={curr.url} alt={curr.filename} key={ind} onClick={() => setmainimg(curr)} />
                        )
                    })
                }
            </div>
            <div className="main-img">
                <figure>
                    <img src={mainimg.url} alt={mainimg.filename} />
                </figure>
            </div>
        </div>
    )
}

export default ImagePallete