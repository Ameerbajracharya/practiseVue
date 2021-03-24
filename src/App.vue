<template>
<AppHeader />
  <div class="w-full flex">
    <!-- <DcHeros /> -->
    <Calender/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import Calender from './components/Calender';
// import DcHeros from './components/DcHeros';

export default {
  components: { AppHeader, Calender },
}
</script>

<style>

</style>
