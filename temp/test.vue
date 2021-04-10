<template>
  <ol>
    <li v-for="(item, idx) in items" :key="idx">
      {{ item.name }}: {{ item.price }}
    </li>
  </ol>
  <button @click="add">Add</button>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Lorem1", price: 123 },
        { name: "Lorem2", price: 345 },
        { name: "Lorem3", price: 456 },
      ],
    };
  },
  methods: {
    add() {
      const newItem = { name: "Lorem4", price: 279 };
      setTimeout(() => {
        this.items.push(newItem);
      }, 3000);
    },
  },
};
</script>

<style>
</style>