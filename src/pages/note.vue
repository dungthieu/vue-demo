<template>
<div class="note">
    <!-- header  -->
    <HeaderNote />
    <!-- list -->
    <NoteItem />
    <!-- add new note -->
    <AddNote />
  </div>
</template>
<script>
import HeaderNote from "@/views/header.vue"
import NoteItem from "@/views/note-item.vue"
import AddNote from "@/views/add-note.vue"

export default {
 components:{
HeaderNote,
    NoteItem,
    AddNote
    }

}
</script>
<style lang=""></style>
