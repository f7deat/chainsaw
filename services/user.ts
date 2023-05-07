import request from "./request";

export async function getStudent() {
    return request.get(`student`);
}

export async function getParent() {
    return request.get(`parent`);
}

export async function createParent(data: API.PhuHuynh) {
    return request({
        url: `parent/register`,
        data,
        method: 'POST'
    });
}

export async function createStudent(data: API.HocVien) {
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