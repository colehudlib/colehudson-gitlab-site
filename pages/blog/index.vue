<template>
  <main>
    <div class="post p2 p-responsive wrap" role="main">
      <div class="measure">
        <div class="home">
          <ContentList path="/blog" v-slot="{ list }">
            <div class="posts" v-for="post in list" :key="post._path">
                <div class="post py3">
                  <p class="post-meta">{{ post.date }}</p>
                  <a :href="'/blog/' + post.url" class="post-link"><h3 class="h1 post-title">{{ post.title }}</h3></a>
                  <p class="post-summary">{{ post.summary }}</p>
                </div>
              </div>
            </ContentList>
        </div> <!-- home -->
      </div> <!-- measure -->
    </div> <!-- post -->
  </main>
</template>

<script>
definePageMeta({
  layout: "blog",
});
</script>

<style lang="scss" scoped>
    @import "@/assets/css/pixyll.scss";
    @import "@/public/font-awesome.min.css";
</style>