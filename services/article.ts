import request, { API_HOST } from "./request";

export async function getArticle(id?: string | string[]) {
    const res = await fetch(`${API_HOST}article/${id}`);
    console.log(res)
    if (res.status !== 200) {
      return [];
    }
    return res.json();
  }
  
  export async function listArticle(params: {
    current: number;
    pageSize: number;
  }) {
    const res = await fetch(`${API_HOST}article/list?current=${params.current}&pageSize=${params.pageSize}`);
    return res.json();
  }