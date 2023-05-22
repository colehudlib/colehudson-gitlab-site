<template>
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

</template>

<style lang="css" scoped>
@import "@/assets/css/styles.css";

a.nav-link {
  -webkit-text-fill-color: #42DCA3;
  font-weight: lighter;
  font-size: 17px;
  text-transform: uppercase;
  font-family: Montserrat,Helvetica,Arial,sans-serif;
}
</style>