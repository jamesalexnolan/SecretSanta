<template>
  <div>
    <div class="container-fluid">
      <div class="row manage-column">
        <div class="col-6 d-flex align-items-center justify-content-end">
          <div class="content">
            <button
              class="btn btn-lg active shadow-sm p-3 mb-5"
              style="
                width: 300px;
                height: 75px;
                font-size: 22px;
                background-color: #cfd7d8;
                box-sizing: content-box;
                display: inline-block;
                padding: 60px;
                margin-right: 40px;
                border: 7px solid #FFF;
              "
            >
              <b-icon
                variant="success"
                icon="tree-fill"
                style="width: 35px; height: 35px"
              ></b-icon
              ><br /><b>Create a Secret Santa </b>
            </button>
          </div>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-start">
          <div class="content">
            <button
              class="btn active shadow-sm p-3 mb-5"
              style="
                width: 300px;
                height: 75px;
                font-size: 22px;
                background-color: #cfd7d8;
                box-sizing: content-box;
                display: inline-block;
                padding: 60px;
                margin-left: 40px;
                border: 7px solid #FFF;
              "
            >
              <b-icon
                variant="danger"
                icon="gift-fill"
                style="width: 35px; height: 35px"
              ></b-icon
              ><br /><b>Manage Secret Santa</b>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-primary">
    <div class="container">
      <div class="insruction-section row py-4">
        <b-card-group>
          <b-card
            v-bind:key="index"
            v-for="(item, index) in items"
            class="col-3"
            style="background: none; border: none"
          >
            <div
              style="
                background-color: #cfd7d8;
                box-sizing: content-box;
                display: inline-block;
                border-radius: 50%;
                padding: 40px;
                border: 7px solid #FFF;
              "
            >
              <b-icon
                variant="success"
                v-bind:icon="item.icon"
                style="width: 50px; height: 50px"
              ></b-icon>
            </div>
            <h3 class="mt-3" style="padding: 0 30px; font-size: 20px">
              <b>{{ item.title }}</b>
            </h3>
          </b-card>
        </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      items: [
        {
          title: "STEP ONE: Create a Secret Santa event",
          paragraph:
            "name your event and set a date for it, while creating a login for yourself at the same time",
          icon: "gift",
        },
        {
          title: "STEP TWO: Invite the participents",
          paragraph:
            "once you have created your event, you’ll be brought to the manage page, here you can start to invite people",
          icon: "chat-dots",
        },
        {
          title: "STEP THREE: Send an invite",
          paragraph:
            "once you have invited people to your event, you can then send an email round notifying them of the date and who their Secret Santa is",
          icon: "envelope",
        },
        {
          title: "STEP FOUR: Manage your event",
          paragraph:
            "Login any time, to edit the event, add new members as well as generate a link to manually send to anyone",
          icon: "card-list",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.manage-column {
  &:after {
    content: "";
    background: url("~@/assets/christmas-tree.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  min-height: 550px;
  position: relative;
  .content {
    z-index: 1;
  }
}

.insruction-section {
  &:after {
    content: "";
    background-color: #053630;
    opacity: 0.9;
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

  position: relative;
}
</style>
