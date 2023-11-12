import { QuestionType } from "@/utils/constants";
import request from "./request";
import server from "./server";
const API_HOST = process.env.API_HOST;

export async function listKhoaHoc(data: any) {
  return request({
    url: `khoahoc/list`,
    data,
  });
}

export async function queryKhoaHoc(id?: string | string[]) {
  const res = await fetch(`${API_HOST}khoahoc/${id}`);
  return res.json();
}

export async function chuongTrinhHoc(params: any, id: number) {
  return request({
    url: `khoahoc/danh-sach-chuong-trinh-hoc/${id}`,
    params,
  });
}

export async function listTopic(params: any, id: number) {
  const res = await fetch(`${API_HOST}khoahoc/danh-sach-chuong-trinh-hoc/${id}?current=${params.current}&pageSize=${params.pageSize}`);
  return res.json();
}

export async function listNhomBaiGiang(id?: string | string[]) {
  return request.get(`bai-giang/nhom-bai-giang/${id}`);
}

export async function listBaiGiang(params: any) {
  return request({
    url: `bai-giang/list`,
    params,
  });
}

export async function getBaiGiang(id?: string | string[]) {
  return request.get(`bai-giang/${id}`);
}

export async function getBaiGiang2(id?: string | string[]) {
  const res = await fetch(`${API_HOST}bai-giang/${id}`);
  if (!res.ok || res.status !== 200) return null;
  return res.json();
}

export async function listHighLight(slug: string) {
  return request.get(`khoahoc/high-light/${slug}`);
}

export async function listQuestion(id?: string | string[]) {
  return request.get(`question/list/${id}`);
}

export async function checkAnswer(
  questionId: number,
  answerId: string | number,
  answerText: string,
  dapAnIds: number[] = [],
  type: string = QuestionType.SINGLE_CHOICE,
  baiGiangId?: string | string[]
) {
  return request({
    url: "question/kiem-tra",
    method: "POST",
    data: {
      CauHoiID: questionId,
      DapAnID: answerId,
      CauTraLoi: answerText,
      dapAnIds: dapAnIds,
      type: type,
      baiGiangId,
    },
  });
}

export async function isBought(id?: string | string[]) {
  return request.get(`khoahoc/allowed/${id}`);
}

export async function getMyCourse(params: any) {
  return request({
    url: `khoahoc/my-course`,
    params
  });
}

export async function listClassroom(params: any) {
  return request({
    url: `classroom/list`,
    params,
  });
}

export async function getTopic(id?: string | string[]) {
  return server(`${API_HOST}chuong-trinh-hoc/${id}`);
}

export async function listTopicBySubjectId(
  params: any,
  id?: string | string[] | number
) {
  return request({
    url: `subject/chuong-trinh-hoc/${id}`,
    params,
  });
}

export async function listTopicBySubjectIdServer(id?: string | string[] | number) {
  const res = await fetch(`${API_HOST}subject/chuong-trinh-hoc/${id}`);
  return res.json();
}

export async function resetResult(id?: string | string[]) {
  return request({
    url: `bai-giang/reset/${id}`,
    method: "POST",
  });
}

export async function fetchAudio(questionId: number, text: string | null) {
  return request({
    url: `question/fetch-audio`,
    method: 'POST',
    data: {
      questionId,
      text
    }
  })
}

export async function activeCourse(data: any) {
  return request({
    url: `khoahoc/active-course`,
    method: 'POST',
    data
  })
}

export async function qyerySelectCourse() {
  return request({
    url: `khoahoc/select`
  })
}