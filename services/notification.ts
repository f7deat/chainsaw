import request from "./request";

export async function notificationCount() {
    return request(`notification/count`);
}