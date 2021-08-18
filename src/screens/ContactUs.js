import React from 'react'


export default function ContactUs() {
    return (
        <div>
           <div class="container2">
  <div style={{textAlign:"center"}}>
    <br />
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    
    <div class="column10">
      <form action="/action_page.php">
        <label for="fname">Enter Your name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label for="lname">Phone No.</label>
        <input type="text" id="lname" name="lastname" placeholder="Phone No.." />
        {/* <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select> */}
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
        <input type="submit" value="Submit" />
      </form >
    </div>
    <div class="column10">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2439452411054!2d88.36110189361384!3d26.707233823603303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32dd2c3f0dc25195!2sKUNDU%20STORES%20Shibmandir%20Bazar%20Kadamtala%20Darjeeling%20734011!5e0!3m2!1sen!2sin!4v1629094777867!5m2!1sen!2sin" width="100%" height="400vh" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</div>

        </div>
    )
}
