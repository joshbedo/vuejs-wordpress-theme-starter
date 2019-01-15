<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>
            </b-col>
            <b-col>
                <pages-widget limit="5">Pages</pages-widget>
            </b-col>
            <b-col>
                <h3>Welcome!</h3>
                <p>You'll probably want to remove all of this stuff, but hey it at least gives you a preview of Bootstrap-Vue!</p>
                <p>I would encourage you to avoid using jQuery and instead find the Vue way of doing some things. You'll thank me later!</p>
                <p>~ <a href="http://evanagee.com/">Evan Agee</a></p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import RecentPostsWidget from './widgets/RecentPosts'
import PagesWidget from './widgets/Pages'

export default {
    components: {
        RecentPostsWidget,
        PagesWidget
    }
}
</script>

<style lang="scss">
    .jumbotron {
        margin-top: 5%;
    }
</style>
