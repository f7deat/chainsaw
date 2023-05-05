import request from "./request";

export async function listComment(params: any, baiGiangId: any) {
    console.log(baiGiangId)
    return request(`comment/list`, {
        method: 'GET',
        params: {
            baiGiangId,
            ...params
        }
    })
}

export async function addComment(data: any) {
    return request(`comment/add`, {
        method: 'POST',
        data
    })
}