import request from "./request";

export function getStudent() {
    return request.get(`student`);
}