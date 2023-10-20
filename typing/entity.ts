declare namespace API {
    type PhuHuynh = {
        soDienThoai: string;
        tenPhuHuynh: string;
        diaChi: string;
        anhDaiDien: string;
        gioiTinh?: boolean | number;
        matKhau: string;
    }
    type HocVien = {
        hocVienId: number;
        soDienThoai?: string;
        hoVaTen: string;
        ngaySinh: Date;
        gioiTinh?: boolean | number;
    }
    type ChuongTrinhHoc = {
        chuongTrinhHocId: number;
        tenChuongTrinhHoc: string;
        khoaHocId: number;
        moTaChuongTrinh: string;
        moTaChiTiet: string;
        gia: number;
        giaCu: number;
    }
    type Topic = {
        id: number;
        name: string;
        description: string;
        thumbnail: string;
    }
    type QuestionListItem = {
        id: number;
        answerNumber: number;
        title: string;
        content: string;
        type: string,
        suggestion: string;
        isCompleted: boolean;
        result: boolean;
        answers: AnswerListItem[];
        voiceUrl?: string;
    }
    type AnswerListItem = {
        id: number;
        text: string;
        questionId: number;
        yourAnswer: boolean;
        mp3Link: string;
    }
    type Article = {
        articleID: number;
        articleCatID: number;
        languageId: string;
        title: string;
        summary: string;
        imagePath: string;
        detail: string;
        seo: string;
        counter: number;
    }
}