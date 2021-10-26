<template>
  <h1 class="text-center">New Bookmark</h1>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        v-model="userData.title"
        type="text"
        class="form-control"
        id="title"
        placeholder="Title"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        type="email"
        v-model="userData.url"
        class="form-control"
        id="url"
        placeholder="URL"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Description</label
      >
      <textarea
        class="form-control"
        placeholder="Description"
        id="description"
        v-model="userData.description"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <div
        class="btn btn-sm btn-danger me-1"
        @click="$router.push({ name: 'HomePage' })"
      >
        Close
      </div>
      <div class="btn btn-sm btn-primary" @click="onSave">Save</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$appAxios.post("/bookmarks", this.userData).then((save_response) => {
        console.log("save_response:", save_response);
      });
      this.resetData();
      this.$router.push("/");
    },
    resetData() {
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
  },
};
</script>

<style>
</style>