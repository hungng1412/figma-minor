import { createClient } from "@liveblocks/client";
const client = createClient({
    publicApiKey:
    "pk_dev_CT9mLJ-yobHGamJe7D8mu4nYx-_gH4zqWGZOijjVbdNBPTgWtOTWRBoALJ83rjS_",
});

const { room, leave } = client.enterRoom("my-room");
