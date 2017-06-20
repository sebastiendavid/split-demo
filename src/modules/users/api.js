export async function fetchUsers() {
  try {
    const response = await fetch('/api/users.json');
    const users = await response.json();
    return { users };
  } catch (error) {
    return { error };
  }
}
