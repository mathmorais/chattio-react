export const asyncFetch = async (
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> => {
  const response = await fetch(input, init);

  return new Promise((resolve, reject) => {
    try {
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
