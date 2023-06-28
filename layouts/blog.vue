<template>
  <body class="site">
    <div class="site-wrap">
        <header class="site-header px2 px-responsive">
            <div class="mt2 wrap">
                <div class="measure">
                <a href="/blog" class="site-title">Scraps of Words and Code</a>
                <nav class="site-nav">
                    <a href="/">Home</a>
                </nav>
                <div class="clearfix"></div>
                    <div class="social-icons">
                        <div class="social-icons-right">
                            <a class="fa fa-github" aria-label="github icon" href="https://github.com/colehudson"></a>
                            <a class="fa fa-stack-overflow" aria-label="stackoverflow icon" href="https://stackoverflow.com/users/1483234"></a>
                            <a class="fa fa-rss" aria-label="rss icon" href="/api/_content/query?path=blog/"></a>
                            <a class="fa fa-twitter" aria-label="twitter icon" href="https://twitter.com/colehud"></a>
                        </div>
                        <div class="right">
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </header>
      <slot />
    </div> <!-- sitewrap -->
  </body>
  </template>

<style lang="scss" scoped>
@import "@/assets/css/pixyll.scss";
</style>
<style lang="css" scoped>
    @import "@/public/font-awesome.min.css";
</style>