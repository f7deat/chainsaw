import request from "./request";

export async function notificationCount() {
    return request(`notification/count`);
}

export async function notificationList() {
    return request(`notification/list`);
}