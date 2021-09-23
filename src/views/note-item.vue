<template>
  <div class="item py-6 px-2 mb-2 mr-4 flex justify-between">
    <div class="text text-left text-2xl">hi</div>
    <div class="action flex items-center text-right">
      <!-- <div class="check">
        <el-button type="warning" icon="el-icon-star-off" circle></el-button> -->
      <!-- <el-button type="warning" icon="el-icon-star-on" circle></el-button> -->
      <!-- </div> -->
      <div class="delete">
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/index.scss";

.item {
  background-color: $c-item;
}
</style>
