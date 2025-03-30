export const fetchUsers = async () => {
    const response = await fetch("http://localhost:3002/users");
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
};
