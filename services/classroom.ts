import request from "./request";

export async function getClassroomBySchool(params: any, id?: number) {
    return request(`classroom/list/by-school/${id}`, {
        params
    })
}

export async function getClassroom(id?: string | string[]) {
    return request.get(`classroom/${id}`)
}

export async function getStudentInClassroom(params: any, id?: string | string[]) {
    return request(`classroom/list/student/${id}`, {
        params
    })
}