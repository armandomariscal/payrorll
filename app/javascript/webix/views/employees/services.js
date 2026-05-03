export async function getEmployees() {
  try {
    const res = await fetch("/employees.json");
    if (!res.ok) {
      throw new Error(`HTTP status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
}