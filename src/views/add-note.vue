<template>
  <div class="add-new text-left my-2 flex justify-between items-center">
    <!-- lọc theo -->
    <select-type class="filter" />
    <!-- theem nv -->
    <div class="input flex text-right">
      <el-button class="add text-center items-center" type="warning"
        >+</el-button
      >
    </div>
  </div>
</template>

<script>
import SelectType from "@/components/select";
export default {
  components: {
    SelectType,
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/index.scss";
.add-new {
  .filter {
    height: 40px !important;
    width: 120px;
    margin: 0 !important;
    padding: 0 !important;
    background-color: $primary;
    color: $white;
    line-height: 0 !important;
  }

  .add {
    padding: 4px !important;
    border-radius: 50%;
    background-color: $white;
    color: $primary;
    font-size: 24px;
    min-width: 34px !important;
    border: 1px solid $gray;
    min-height: 26px !important;
    height: 34px !important;
  }
}
</style>
