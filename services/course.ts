import request from "./request";

export async function listCourse() {
    return request.get(`khoahoc/getkhoahocs`);
}