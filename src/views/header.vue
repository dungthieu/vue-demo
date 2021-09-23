<template>
  <div class="header flex justify-between relative">
    <!-- left -->
    <div class="left text-left">
      <div class="title text-4xl mb-3">{{ $t("note.Title") }}</div>
      <div class="descript text-base">{{ $t("note.Description") }}</div>
    </div>
    <!-- right -->
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/index.scss";

.header {
  border-bottom: 1px solid $gray;
}
</style>
