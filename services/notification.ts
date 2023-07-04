import request from "./request";

export async function notificationCount() {
    return request(`notification/count`);
}

export async function notificationList() {
    return request(`notification/list`);
}

export async function getNotification(id: string) {
    return request.get(`notification/${id}`)
}