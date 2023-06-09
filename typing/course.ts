namespace API {
    export type KhoaHoc = {
        khoaHocId: number;
        tenKhoaHoc: string;
    }
    export type MyCourse = {
        id: string;
        name: string;
        description: string;
        thumbnail: string;
        slug: string;
    }

    export type ChuongTrinhHocListItem = {
        id: number;
        name: string;
        description: string;
        thumbnail: string;
    }
}