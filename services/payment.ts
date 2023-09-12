import request from "./request";

export async function listTransactionHistoryByCurrentUser() {
    return request(`transactionhistory/list-by-current-user`)
}