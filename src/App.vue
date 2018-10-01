<template>
  <div id="app" class="container-fluid">
    <!-- App Header -->
    <app-header/>
    <!-- Body Header -->
    <app-body>
      <template slot="body">
        <!-- Router Config -->
        <router-view></router-view>
      </template>
    </app-body>
    <!-- App Footer -->
    <app-footer/>
  </div>
</template>

<script>
import AppBody from "./components/app.body";
import AppFooter from "./components/app.footer";
import AppHeader from "./components/app.header";

export default {
  name: 'app',
  components: {
    AppBody,
    AppFooter,
    AppHeader
  }
}
</script>

<style lang="scss">
</style>
