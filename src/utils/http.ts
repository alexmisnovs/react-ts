export async function get(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Couldn't fetch Status Code: ${response.status}`);
    }
    const data = (await response.json()) as unknown;

    return data;
  } catch (e) {
    // if its our response related error from above we throw it here
    if (e instanceof Error) {
      throw new Error(`Something went Wrong: ${e.message}`);
    }
    // else lets throw our own error clas TODO:
    throw new Error("Server Error");
  }
}
