import request from "./request";

export async function getSubject(id?: string | string[]) {
    return request(`subject/${id}`);
}

export async function listSubject(params: any) {
    return request({
        url: `subject/list`,
        params
    })
}