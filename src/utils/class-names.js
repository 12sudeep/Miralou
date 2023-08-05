export const classNames = (...args) => {
  return args.filter(Boolean).join(" ");
};
