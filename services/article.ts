import request, { API_HOST } from "./request";

export async function getArticle(id?: string | string[]) {
    const res = await fetch(`${API_HOST}article/${id}`);
    return res.json();
  }
  
  export async function listArticle(params: {
    current: number;
    pageSize: number;
  }) {
    return request(`article/list`, {
      params: params
    })
  }