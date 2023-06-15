import request from "./request";

export async function liveStreamList() {
    return request.get(`livestream/list`);
}