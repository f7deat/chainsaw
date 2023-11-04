import server from "./server";

const API_HOST = process.env.API_HOST;

export async function getSubject(id?: string | string[]) {
  const res = await fetch(`${API_HOST}subject/${id}`);
  return await res.json();
}

export async function serverSubjects() {
  return server.get(`subject/list`) as any;
}