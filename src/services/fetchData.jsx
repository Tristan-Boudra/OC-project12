export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  } catch (error) {
    window.location.href = "/error";
  }
}
