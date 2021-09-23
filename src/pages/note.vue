<template>
  <div class="note p-10 absolute">
    <!-- header  -->
    <HeaderNote class="pb-1" />
    <!-- add new note -->
    <AddNote />
    <!-- list -->
    <div class="filter"></div>
    <!-- filter -->
    <div class="list my-3 overflow-x-hidden -mr-5 overflow-y-scroll">
      <transition-group name="note" tag="div">
        <NoteItem v-for="(item, index) in 10" :key="index" />
      </transition-group>
    </div>
  </div>
</template>
<script>
import HeaderNote from "@/views/header.vue";
import NoteItem from "@/views/note-item.vue";
import AddNote from "@/views/add-note.vue";

export default {
  components: {
    HeaderNote,
    NoteItem,
    AddNote,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/index.scss";
.note {
  width: 500px;
  height: 700px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: $white;
  background-color: $primary;

  .list {
    height: calc(100% - 130px);
  }
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: $c-scroll-track;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: $c-scroll-handle;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: $c-scroll-hover;
  }
}
</style>
