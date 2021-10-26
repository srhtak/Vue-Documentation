<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end mb-2">
      <div @click="goNewBookmark" class="btn btn-primary btn-sm">
        +Add Bookmark
      </div>
    </div>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">URL</th>
          <th scope="col">Description</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
          <th scope="row">{{ bookmark.id }}</th>
          <td>{{ bookmark.title }}</td>
          <td>
            <a href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
          </td>
          <td>{{ bookmark.description }}</td>
          <td>
            <div @click="deleteItem(bookmark)" class="btn btn-sm btn-danger">
              Delete
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((bookmarks_list_response) => {
      this.bookmarkList = bookmarks_list_response.data || [];
    });
  },
  methods: {
    goNewBookmark() {
      this.$router.push({ name: "newBookmark" });
    },
    deleteItem(bookmark) {
      this.$appAxios
        .delete(`/bookmarks/${bookmark.id}`)
        .then((delete_response) => {
          if (delete_response.status === 200) {
            this.bookmarkList = this.bookmarkList.filter(
              (b) => b.id != bookmark.id
            );
          }
        });
    },
  },
};
</script>

<style>
</style>