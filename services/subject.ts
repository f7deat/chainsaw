const API_HOST = process.env.API_HOST;

export async function getSubject(id?: string | string[]) {
  const res = await fetch(`${API_HOST}subject/${id}`);
  return await res.json();
}

export async function listSubject(params: any) {
  const res = await fetch(`${API_HOST}subject/list`);
  return res.json();
}
