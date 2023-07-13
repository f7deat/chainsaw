import { API_HOST } from "./request";

export async function getArticle(id?: string | string[]) {
    const res = await fetch(`${API_HOST}article/${id}`);
    return res.json();
  }
  