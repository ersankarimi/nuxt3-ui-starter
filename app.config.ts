export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "slate",
    container: {
      constrained: "max-w-screen-xl",
    },
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      default: {
        color: "primary",
        icon: null,
        timeout: 5000,
      },
    },
  },
});
