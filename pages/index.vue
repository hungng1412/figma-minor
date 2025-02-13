<script setup>
import { useLiveblocks } from "~/composables/useLiveblocks";

const { liveblocks } = useLiveblocks();

const room = liveblocks?.enterRoom("my-room");

onBeforeUnmount(() => {
  room?.leave();
});
</script>

<template>
  <div>
    <h1>Liveblocks với Nuxt 3</h1>
    <p>Đang kết nối tới phòng...</p>
  </div>
</template>
