<template>
  <div class="card">
    <div class="card-body">
      <div data-id="event-type-card-cap" class="card-line" :style="{backgroundColor: item.color}" />
      <h2>
        {{ item.name }}
      </h2>
      <p>{{ item.slug }}</p>
      <a :href="item.scheduling_url">View booking page</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style>
.card {

    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 10%);
    height: 200px;
    margin-top: 16px;
}
.card-body {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.card-body h2 {
  font-size: 20px;
}
.card-body p {
  font-size: 16px;
  font-color: gray;
}
.card-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 6px;
  border-radius: 4px;
  margin-top: -6px;
}
</style>
