export const resolveAfterSeconds = (value: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  }) as Promise<number>;
};
