<template>
<!-- Contact Section -->
<section class="container contact-section bg-black" id="contact">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2>Contact Me</h2>
            <hr class="star-primary">
        </div>
    </div>
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <form id="contact_form" action="https://formspree.io/f/mzbqqpbo" method="POST">
                <input type="hidden" name="_subject" value="colehudson.org Form Submission" style="display:none">
                <input type="text" name="_gotcha" style="display:none">
                <div class="row">
                    <div class="form-group col-xs-12 floating-label-form-group">
                        <label for="name">Name</label>
                        <input class="form-control" type="text" id="name" name="name" placeholder="Name">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12 floating-label-form-group">
                        <label for="email">Email Address</label>
                        <input class="form-control" type="email" id="email" name="email" placeholder="Email Address">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12 floating-label-form-group">
                        <label for="message">Message</label>
                        <textarea placeholder="Message" id="message" name="message" class="form-control" rows="5"></textarea>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <button type="submit" value="Send" class="btn btn-lg btn-success">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </section>
</template>

<style type="css" scoped>
@import "@/assets/css/styles.css";

#contact h2 {
  box-sizing: border-box;
  display: block;
  padding-top: 100px;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 33px;
  margin-block-end: 35px;
  margin-block-start: 0px;
  margin-bottom: 35px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  text-align: center;
  text-size-adjust: 100px;
  font-family: Montserrat,'Helvetica Neue',Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  -webkit-tap-highlight-color: #fff;
  color: #fff;
}

label {
  box-sizing: border-box;
  display: inline-block;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 5px;
  max-width: 100%;
  text-size-adjust: 100px;
  font-family: Montserrat,'Helvetica Neue',Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  -webkit-tap-highlight-color: #fff;
  color: #fff;
}

input, textarea {
  box-sizing: border-box;
  display: inline-block;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 5px;
  max-width: 100%;
  text-size-adjust: 100px;
  font-family: Montserrat,'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-tap-highlight-color: #fff;
}
button {
  box-sizing: border-box;
  display: inline-block;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 5px;
  max-width: 100%;
  text-size-adjust: 100px;
  font-family: Montserrat,'Helvetica Neue',Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  -webkit-text-fill-color: #fff;
}
</style>