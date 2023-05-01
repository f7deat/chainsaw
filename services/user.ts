import request from "./request";

export async function getStudent() {
    return request.get(`student`);
}

export async function getParent() {
    return request.get(`student/parent`);
}