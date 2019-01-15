<template>
    <b-navbar toggleable="md" type="dark" variant="dark">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-navbar-brand to="/">Vuejs Wordpress Theme Starter</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-nav is-nav-bar>
              <b-nav-item v-for="item in menuItems" v-bind:key="item.title" :href="item.url">{{ item.title }}</b-nav-item>
            </b-nav>

            <!-- Right aligned nav items -->
            <b-nav is-nav-bar class="ml-auto">

            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
import Loader from '../partials/Loader.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      page: 'page',
      allPagesLoaded: 'allPagesLoaded',
      // headerMenu: 'headerMenu'
    }),

    menuItems() {
      return this.$store.getters.headerMenu();
    }
  },

  components: {
    Loader
  }
}
</script>
