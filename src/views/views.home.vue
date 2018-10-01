<template>
  <div class="container-fluid">
    <div class="d-flex flex-column w-100">
      <h4>Home View</h4>
      <p>Dolore eu enim sit aliquip nulla culpa ullamco eu laborum nulla enim. Et enim cupidatat ex voluptate ea mollit sint minim aute voluptate cupidatat officia irure eiusmod. Proident reprehenderit non ut mollit magna ea eiusmod qui reprehenderit anim mollit sit pariatur. Nisi labore in eu sunt id consequat pariatur id excepteur aliquip excepteur. Nisi quis et qui fugiat dolore sint mollit nulla anim elit eu proident minim ea.</p>
    </div>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields';
import MixHello from './../mixins/mix.hello';

const { mapFields } = createHelpers({
  getterType: 'ModuleHome/getField',
})
export default {
  name: 'views-home',
  // Get all state of Module Home
  computed: {
    ...mapFields(['list','item'])
  },
  mixins: [MixHello]
}
</script>

<style scoped lang="scss">

</style>
