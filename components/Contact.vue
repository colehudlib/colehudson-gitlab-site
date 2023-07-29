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
            <form id="contact_form"  @submit.prevent="submitForm">
                <input type="hidden" name="_subject" value="colehudson.org Form Submission" style="display:none">
                <input type="text" name="_gotcha" aria-label="Don't fill in this field; it's for bots" style="display:none">
                <div class="row">
                    <div class="form-group col-xs-12 floating-label-form-group">
                        <label for="name">Name</label>
                        <input class="form-control" type="text" id="name" name="name" v-model="name" placeholder="Name">
                        <div class="error-message" name="name" v-if="formSubmitted && !name.trim()">Name is required.</div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12 floating-label-form-group">
                        <label for="email">Email Address</label>
                        <input class="form-control" type="email" id="email" name="email" v-model="email" placeholder="Email Address">
                        <div class="error-message" name="email" v-if="formSubmitted && !email.trim()">Email Address is required.</div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12 floating-label-form-group">
                        <label for="message">Message</label>
                        <textarea placeholder="Message" id="message" name="message" v-model="message" class="form-control" rows="5"></textarea>
                        <div class="error-message" name="message" v-if="formSubmitted && !message.trim()">Message is required.</div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <button type="submit" value="Send" class="btn btn-lg btn-success">Send</button>
                    </div>
                </div>
                <div class="success-message" v-if="formSuccess">Thanks for filling out the contact form. I'll be in touch.</div>
                <div class="error-message" v-if="formError">Sorry, something went wrong. Please try again.</div>
              </form>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      formSubmitted: false,
      formSuccess: false,
      formError: false,
      formErrors: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.formSubmitted = true;
      this.formErrors = {}; // Reset formErrors before form submission

      // Form validation: Check if required fields are empty
      if (!this.name.trim()) {
        this.formErrors.name = 'Name is required.';
      }
      if (!this.email.trim()) {
        this.formErrors.email = 'Email Address is required.';
      }
      if (!this.message.trim()) {
        this.formErrors.message = 'Message is required.';
      }

      // Stop form submission if any required field is empty
      if (Object.values(this.formErrors).some(error => error)) {
        return;
      }

      // Submit form
      try {
        const response = await fetch('https://formspree.io/f/mzbqqpbo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        // Check if the form submission was successful
        if (response.ok) {
          // Success message to the user
          this.formSuccess = true;
          // Reset form fields and end form submission
          this.name = '';
          this.email = '';
          this.message = '';
          this.formSubmitted = false;
        } else {
          // Handle errors or display an error message to the user
          const data = await response.json();
          console.error('Form submission failed:', data);
          this.formError = true;
        }
      } catch (error) {
        console.error('Form submission failed:', error);
        this.formError = true;
      }
    },
  },
};
</script>

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

.error-message {
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
  -webkit-tap-highlight-color: red;
  color: red;
}

.success-message {
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
  color: #fff;
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