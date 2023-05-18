import { QuestionType } from "@/utils/constants";
import request from "./request";

export async function listCourse() {
    return request.get(`khoahoc/getkhoahocs`);
}

export async function listKhoaHoc(data: any) {
    return request({
        url: `khoahoc/list`,
        data
    });
}

export async function queryKhoaHoc(id: string | string[]) {
    return request.get(`khoahoc/${id}`);
}

export async function chuongTrinhHoc(params: any, id?: string | string[]) {
    return request({
        url: `khoahoc/danh-sach-chuong-trinh-hoc/${id}`,
        params
    })
}

export async function listNhomBaiGiang(id?: string | string[]) {
    return request.get(`bai-giang/nhom-bai-giang/${id}`);
}

export async function listBaiGiang(params: any) {
    return request({
        url: `bai-giang/list`,
        params
    });
}

export async function getBaiGiang(id?: string | string[]) {
    return request.get(`bai-giang/${id}`)
}

export async function listHighLight(slug: string) {
    return request.get(`khoahoc/high-light/${slug}`)
}

export async function listQuestion(id?: string | string[]) {
    return request.get(`cau-hoi/danh-sach/${id}`)
}

export async function checkAnswer(questionId: number, answerId: string | number, answerText: string, dapAnIds: number[] = [], type: string = QuestionType.SINGLE_CHOICE, baiGiangId?: string | string[]) {
    return request({
        url: 'cau-hoi/kiem-tra',
        method: 'POST',
        data: {
            CauHoiID: questionId,
            DapAnID: answerId,
            CauTraLoi: answerText,
            dapAnIds: dapAnIds,
            type: type,
            baiGiangId
        }
    })
}

export async function isBought(id?: string | string[]) {
    return request({
        url: `khoahoc/checkmuakhoahoc`,
        method: 'POST',
        data: {
            ChuongTrinhHocID: id
        }
    })
}

export async function getMyCourse() {
    return request.get(`khoahoc/my-course`);
}

export async function listClassroom(params: any) {
    return request({
        url: `classroom/list`,
        params
    });
}

export async function getChuongTrinhHoc(id?: string | string[]) {
    return request.get(`chuong-trinh-hoc/${id}`);
}

export async function listChuongTrinhHocBySubjectId( params: any, id?: string | string[] | number) {
    return request({
        url: `subject/chuong-trinh-hoc/${id}`,
        params
    })
}

export async function resetResult(id?: string | string[]) {
    return request({
        url: `bai-giang/reset/${id}`,
        method: 'POST'
    })
}