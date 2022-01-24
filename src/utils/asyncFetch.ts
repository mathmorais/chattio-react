export const asyncFetch = async <T extends Record<string, unknown>>(
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<T> => {
  const body = await fetch(input, init);

  return new Promise((resolve, reject) => {
    try {
      resolve(body.json());
    } catch (err) {
      reject(err);
    }
  });
};
