import React, { useState } from 'react'

const Contact = () => {
  const [mapwidth, setmapwidth] = useState(window.screen.width);

  window.addEventListener("change", () => {
    setmapwidth(window.screen.width);
  })

  return (
    <div id='contacts'>
      <h1>Feel Free To Contact Us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.196658325898!2d88.70117917484215!3d26.545949475756977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47bce687f169d%3A0x4152036d0d736d37!2sJalpaiguri%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1692208168582!5m2!1sen!2sin" width={mapwidth} height="400" style={{ border: "none" }} allowFullScreen="" loading="lazy" title="name" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <form action='https://formspree.io/f/mbjvgvop' method="POST">
        <div className="namefield">
          <label htmlFor='#name'>Name</label>
          <input type='text' name='name' id='name' required autoComplete='off' placeholder='Name'/>
        </div>
        <div className="emailfield">
          <label htmlFor='#email'>Email</label>
          <input type='email' name='email' id='email' required autoComplete='off' placeholder='Email'/>
        </div>
        <div className="messagefield">
          <label htmlFor='#message'>Your Message</label>
          <textarea name='message' id='message' autoFocus required placeholder='Enter Your Message'/>
        </div>
        <button>SEND</button>
      </form>
    </div>
  )
}

export default Contact