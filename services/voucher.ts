import request from "./request";

export async function queryVoucher(code: string) {
    return request({
        url: `voucher?code=${code}`,
        method: 'GET'
    })
}