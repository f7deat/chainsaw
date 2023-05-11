import request from "./request";

export async function getStudent() {
    return request.get(`student`);
}

export async function getParent() {
    return request.get(`parent`);
}

export async function register(data: any) {
    return request({
        url: `parent/register`,
        data,
        method: 'POST'
    });
}

export async function addStudent(data: API.HocVien) {
    return request({
        url: `student/add`,
        method: 'POST',
        data
    })
}

export async function login(data: any) {
    return request({
        url: `auth/password-sign-in`,
        method: 'POST',
        data
    })
}

export async function changePassword(data: any) {
    return request({
        url: `parent/change-password`,
        method: 'POST',
        data
    })
}

export async function listNewStudent() {
    return request.get(`student/list-new`);
}

export async function updateStudent(data: any) {
    return request({
        url: `student/update`,
        method: 'POST',
        data
    })
}

export async function updateParent(data: any) {
    return request({
        url: `parent/update`,
        method: 'POST',
        data
    })
}

export async function getHelp(data: any) {
    return request({
        url: `student/help`,
        method: 'POST',
        data
    })
}

export async function listUserSelect(params: any) {
    return request({
        url: `user/list-select`,
        params
    })
}