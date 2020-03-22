import React from 'react'

export default () => (
  <>
    <h3>Contact Us</h3>
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/info@twincitiesaquaponics.com" method="post">
      <fieldset id="fs-frm-inputs">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
        <label htmlFor="email-address">Email Address</label>
        <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required=""/>
        <label htmlFor="message">Message</label>
        <textarea rows="5" name="message" id="message" placeholder="I want to schedule a tour..." required=""></textarea>
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
      </fieldset>
      <input type="text" name="_gotcha" style={{display:'none'}} />
      <input type="submit" value="Submit"/>
    </form>
  </>
)