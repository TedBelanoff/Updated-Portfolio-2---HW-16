import React from "react";

function Contact(){
  return(
  <div class="jumbotron" >
    <div class="container">
      <div class="card">
      {/* Contact Information */}
      <h1 class="card-header">Contact</h1>
      <h4>Name: Ted Belnoff</h4>
      <h4>Phone: 650-207-1907</h4>
      <h4>Email: TedBelanoff@gmail.com</h4>
      <h3></h3>
      {/* Contact Form */}
      <form class="border border-light p-5" action="#!">
	    <h1 class="card-header">Contact Form</h1>
      {/* Name Input */}
          <label>Name</label>
            <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="John Smith"></input>
      {/* Email Input */}
          <label>Email</label>
            <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="example@gmail.com"></input>
      {/* Message Input */}
          <label>Message</label>
            <div class="form-group">
              <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" placeholder="You can alternatively email TedBelanoff@gmail.com to reach Ted directly" rows="9"></textarea>
              </div>
      {/* Submit Button */}
          <button class="btn btn-info" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>
)};

export default Contact;
