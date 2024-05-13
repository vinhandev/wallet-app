export const delay = (second: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, second);
  });
};
