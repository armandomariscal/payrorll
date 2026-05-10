const BASE_URL = '/employees';

function csrfToken() {
  return document.querySelector('meta[name="csrf-token"]')?.content;
}

export async function getEmployees() {
  try {
    const response = await fetch(`${BASE_URL}.json`);

    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching employees:', error);

    return [];
  }
}

export async function updateEmployee(id, data) {
  const response = await fetch(`${BASE_URL}/${id}.json`, {
    method: 'PUT',

    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRF-Token': csrfToken()
    },

    body: JSON.stringify({
      employee: data
    })
  });

  if (!response.ok) {
    const error = await response.text();

    console.error(error);

    throw new Error('Failed to update employee');
  }

  return response.json();
}

export async function createEmployee(data) {
  const response = await fetch(`${BASE_URL}.json`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRF-Token': csrfToken()
    },

    body: JSON.stringify({
      employee: data
    })
  });

  if (!response.ok) {
    const error = await response.text();

    console.error(error);

    throw new Error('Failed to create employee');
  }

  return response.json();
}
