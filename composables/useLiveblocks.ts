import { useNuxtApp } from "#app";

export const useLiveblocks = () => {
  const { $liveblocks } = useNuxtApp();

  return {
    liveblocks: $liveblocks,
  };
};
