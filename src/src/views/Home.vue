<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 create-column d-flex align-items-center justify-content-center">
        <button class="btn btn-lg active shadow-sm p-3 mb-5 bg-white"><b-icon variant="success" class="mr-2" icon="tree-fill"></b-icon>Create a Secret Santa</button>
      </div>
      <div class="col-6 manage-column d-flex align-items-center justify-content-center">
        <button class="btn btn-lg active shadow-sm p-3 mb-5 bg-white"><b-icon variant="danger" class="mr-2" icon="gift-fill"></b-icon>Manage a Secret Santa</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped lang="scss">
.create-column {
  &:after {
    content: "";
    background: url("~@/assets/christmas-bulb.jpg");
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  min-height: 500px;
  position: relative;
  border-right: 2px solid white;
}

.manage-column {
  &:after {
    content: "";
    background: url("~@/assets/christmas-tree.jpg");
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  min-height: 500px;
  position: relative;
  border-left: 2px solid white;
}
</style>