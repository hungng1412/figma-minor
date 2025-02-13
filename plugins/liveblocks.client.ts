import { createClient } from "@liveblocks/client";

export default defineNuxtPlugin((nuxtApp) => {
  const client = createClient({
    publicApiKey: "pk_dev_CT9mLJ-yobHGamJe7D8mu4nYx-_gH4zqWGZOijjVbdNBPTgWtOTWRBoALJ83rjS_",
  });
  const { room, leave } = client.enterRoom("my-room");
  return {
    provide: {
      liveblocks: client,
    },
  };
});