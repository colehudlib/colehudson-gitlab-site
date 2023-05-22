<template>
    <ContentDoc v-slot="{ doc }">
        <div class="post p2 p-responsive wrap" role="main">
            <div class="measure">
                <div class="post-header mb2">
                    <h1>{{ doc.title }}</h1>
                    <span class="post-meta">{{ doc.date }}</span><br/>
                    <span class="post-meta small">{{ doc.minutes }}</span>
                </div>

                <article class="post-content">
                    <ContentDoc></ContentDoc>
                    <figure class="higlight">
                    <ContentSlot :use="$slots.default" />
                    <slot />
                    </figure>
                </article>

            </div> <!-- measure -->
        </div>
    </ContentDoc>
    <footer class="center">
        <div class="measure">
            <small>
                Theme crafted with &lt;3 by <a href="http://johnotander.com">John Otander</a> (<a href="https://twitter.com/4lpine">@4lpine</a>).<br>
                &lt;/&gt; available on <a href="https://github.com/johnotander/pixyll">Github</a>.
            </small>
        </div>
    </footer>
</template>

<script>
definePageMeta({
  layout: "blog",
});
</script>

<style lang="scss" scoped>
    @import "@/assets/css/pixyll.scss";
</style>
<style lang="css" scoped>
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css";
    @import "https://fonts.googleapis.com/css?family=Merriweather:900,900italic,300,300italic";
    @import "https://fonts.googleapis.com/css?family=Lato:900,300";
    @import "@/public/font-awesome.min.css";
</style>
