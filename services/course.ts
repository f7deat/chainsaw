import request from "./request";

export async function listCourse() {
    return request.get(`khoahoc/getkhoahocs`);
}

export async function chuongTrinhHoc(id?: string | string[]) {
    return request.get(`khoahoc/getchuongtrinhhocs/?khoahocid=${id}`)
}

export async function getBaiGiang(id?: string | string[]) {
    return request.get(`khoahoc/getbaigiangs/${id}`)
}

export async function listHighLight(slug: string) {
    return request.get(`khoahoc/high-light/${slug}`)
}