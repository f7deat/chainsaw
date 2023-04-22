import request from "./request";

export async function getStudent() {
    return request.get(`student`);
}