<template>
  <el-select v-model="value" placeholder="Option1">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "Option1",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/index.scss";
:deep(.el-input--suffix .el-input__inner) {
  padding: 0 !important;
}
:deep(.el-input__inner) {
  background-color: $primary;
  color: $white;
  border: none;
}
:deep(.el-input) {
  --el-input-icon-color: $white !important;
}
</style>
