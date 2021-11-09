<template>
  <div class="container-fluid">
    
    <div class="row">
      <div
        class="
          col-6
          create-column
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <button class="btn btn-lg active shadow-sm p-3 mb-5 bg-white">
          <b-icon variant="success" class="mr-2" icon="tree-fill"></b-icon
          >Create a Secret Santa
        </button>
      </div>
      <div
        class="
          col-6
          manage-column
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <button class="btn btn-lg active shadow-sm p-3 mb-5 bg-white">
          <b-icon variant="danger" class="mr-2" icon="gift-fill"></b-icon>Manage
          a Secret Santa
        </button>
      </div>
    </div>

    <div class="container-fluid">
   
      <div
        class="
          col-12
          insruction-hero
          d-flex
          align-items-center
          justify-content-center
        "
      >
         <div>
      <h1>Secret Santa</h1>
      <h3>Easily organise and assign your secret santas!</h3>
    </div>
  <br>
        <div>
          <b-img
            v-bind="mainProps"
            rounded="circle insruction-circles"
            alt="Circle image"
          ></b-img>
          <h4>
            <b
              >STEP ONE: <br />
              Create a Secret Santa event</b
            >
          </h4>
          <br>
          <p>
            name your event and set a date for it, while creating a login for
            yourself at the same time
          </p>
        </div>

        <div>
          <b-img
            v-bind="mainProps"
            rounded="circle insruction-circles"
            alt="Circle image"
          ></b-img>
          <h4>
            <b
              >STEP TWO: <br />
              Invite the participents</b
            >
          </h4>
          <br />
          <p>
            once you have created your event, you’ll be brought to the manage
            page, here you can start to invite people
          </p>
        </div>
        <div>
          >
          <b-img
            v-bind="mainProps"
            rounded="circle insruction-circles"
            alt="Circle image"
          ></b-img>
          <h4>
            <b
              >STEP THREE: <br />
              Send an invite</b
            >
          </h4>
          <br />
          <p>
            once you have invited people to your event, you can then send an
            email round notifying them of the date and who their Secret Santa is
          </p>
        </div>
        <div>
          <b-img
            v-bind="mainProps"
            rounded="circle insruction-circles"
            alt="Circle image"
          ></b-img>
          <h4>
            <b
              >STEP FOUR: <br />
              Manage your event</b
            >
          </h4>
          <br />
          <p>
            Login any time, to edit the event, add new members as well as
            generate a link to manually send to anyone
          </p>
        </div>
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
  border-right: 5px solid #f6f7eb;
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
  border-left: 5px solid #f6f7eb;
}

.insruction-hero {
  &:after {
    content: "";
    background: url("~@/assets/christmas-central.jpg");
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
  min-height: 600px;
  position: relative;
  border-top: 10px solid #f6f7eb;
}

.insruction-circles {
  min-width: 150px;
  min-height: 150px;
  border: 5px solid #b4dfcb;
  background: #f6f7eb;
}
</style>