export async function saveUser(name) {
  const res = await fetch(
    '/kasper/users',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: name,
      }),
    },
  );
  if (!res.ok) {
    throw new Error(`Unexpected response: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function editUser(id, name) {
  const res = await fetch(
    `/kasper/users/${id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
      }),
    },
  );
  if (!res.ok) {
    throw new Error(`Unexpected response: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(
    `/kasper/users/${id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
    },
  );
  if (!res.ok) {
    throw new Error(`Unexpected response: ${res.status} ${res.statusText}`);
  }
}

export async function getUsers(name) {
  const res = await fetch('/kasper/users');
  if (!res.ok) {
    throw new Error(`Unexpected response: ${res.status} ${res.statusText}`);
  }

  return res.json();
}