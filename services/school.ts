import request from "./request";

export async function getSchoolByUser() {
    return request(`school/by-user`)
}