import request from "./request";

export async function getUser(id: string | string[] = '0') {
    return request.get(`user/${id}`);
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

export async function learningHistory(params: any, id?: string | string[]) {
    return request({
        url: `user/learning-history/${id}`,
        params
    })
}
export async function learningResult(id?: string | string[]) {
    return request({
        url: `user/learning-result/${id}`
    })
}

export async function userLogin(data: any) {
    return request({
        url: `login`,
        method: 'POST',
        data
    })
}

export async function listRefer(params: any) {
    return request({
        url: `user/list-refer`,
        params
    })
}

export async function listQuestionHistory(params: any) {
    return request({
        url: `user/question-history-detail`,
        params
    })
}