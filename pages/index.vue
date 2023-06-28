<template>

<!-- Masthead-->
<header class="masthead">
    <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div class="d-flex justify-content-center">
            <div class="col-lg-8" aria-label="heading">
                <h1 class="brand-heading">Cole Hudson</h1>
                  <section class="rw-wrapper">
                    <h2 class="rw-sentence ext-white-50 mx-auto mt-2 mb-5">
                        <span>is a</span>
                          <div class="rw-words rw-words-1">
                            <span>librarian.</span>
                            <span>curator.</span>
                            <span>linux user.</span>
                            <span>programmer.</span>
                            <span>tinkerer.</span>
                          </div>
                    </h2>
                  </section>
                <ul class="d-flex justify-content-lg-center list-unstyled">
                    <li><a href="https://www.facebook.com/colehudson" class="btn-social btn-outline ms-2" aria-label="facebook icon"><i class="fa fa-fw fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/colehud" class="btn-social btn-outline ms-2" aria-label="twitter icon"><i class="fa fa-fw fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/colehudson" class="btn-social btn-outline ms-2" aria-label="linkedin icon"><i class="fa fa-fw fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</header>

</template>

<style lang="css" scoped>
@import "https://fonts.googleapis.com/css?family=Varela+Round";
@import "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i";
@import "@/assets/css/styles.css";
@import "@/public/font-awesome.min.css";



h1.brand-heading {
  -webkit-text-fill-color: #fff;
  font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
  display: block;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 100px;
  letter-spacing: 1px;
  line-height: 110px;
  margin-block-end: 35px;
  margin-block-start: 0px;
  margin-bottom: 35px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  text-align: center;
  text-size-adjust: 100%;
  text-transform: uppercase;
}

@media (max-width: 575.98px) {
  h1.brand-heading {
    font-size: 78px;
  }
  .list-unstyled {
    justify-content: center;
    }
}

h2.rw-sentence {
  box-sizing: border-box;
  color: #fff;
  font-family: Lora,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 28.6px;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: lowercase;
  -webkit-tap-highlight-color: #fff;


}

a.btn-social {
  color: #42DCA3;
}

/* rotating word credit to codrops tutorial: https://tympanus.net/codrops/2012/04/17/rotating-words-with-css-animations/*/
.rw-wrapper{
    width: 80%;
    position: relative;
    /*margin: 110px auto 0 auto;*/
    /*padding: 10px;*/
}
.rw-sentence{
    margin: 0;
    margin-left:-110px;
    text-transform: lowercase;
    font-family: Lora,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: normal;
    /*text-align: left;*/
    /*text-shadow: 1px 1px 1px rgba(255,255,255,0.8);*/
}
.rw-words{
    display: inline;
    text-align: center;
    text-indent: 9px;
}
.rw-words-1 span{
    position: absolute;
    opacity: 0;
    overflow: hidden;
    color: #6b969d;
    -webkit-animation: rotateWord 18s linear infinite 0s;
    -ms-animation: rotateWord 18s linear infinite 0s;
    animation: rotateWord 18s linear infinite 0s;
}
.rw-words-1 span:nth-child(2) {
    -webkit-animation-delay: 3s;
    -ms-animation-delay: 3s;
    animation-delay: 3s;
    color: #6b889d;
}
.rw-words-1 span:nth-child(3) {
    -webkit-animation-delay: 6s;
    -ms-animation-delay: 6s;
    animation-delay: 6s;
    color: #6b739d;
}
.rw-words-1 span:nth-child(4) {
    -webkit-animation-delay: 9s;
    -ms-animation-delay: 9s;
    animation-delay: 9s;
    color: #7a6b9d;
}
.rw-words-1 span:nth-child(5) {
    -webkit-animation-delay: 12s;
    -ms-animation-delay: 12s;
    animation-delay: 12s;
    color: #8d6b9d;
}
.rw-words-1 span:nth-child(6) {
    -webkit-animation-delay: 15s;
    -ms-animation-delay: 15s;
    animation-delay: 15s;
    color: #9b6b9d;
}
@-webkit-keyframes rotateWord {
    0% { opacity: 0; }
    2% { opacity: 0; -webkit-transform: translateY(-30px); }
    5% { opacity: 1; -webkit-transform: translateY(0px);}
    17% { opacity: 1; -webkit-transform: translateY(0px); }
    20% { opacity: 0; -webkit-transform: translateY(30px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
}
@-ms-keyframes rotateWord {
    0% { opacity: 0; }
    2% { opacity: 0; -ms-transform: translateY(-30px); }
    5% { opacity: 1; -ms-transform: translateY(0px);}
    17% { opacity: 1; -ms-transform: translateY(0px); }
    20% { opacity: 0; -ms-transform: translateY(30px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
}
@keyframes rotateWord {
    0% { opacity: 0; }
    2% { opacity: 0; -webkit-transform: translateY(-30px); transform: translateY(-30px); }
    5% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px);}
    17% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px); }
    20% { opacity: 0; -webkit-transform: translateY(30px); transform: translateY(30px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
}
</style>