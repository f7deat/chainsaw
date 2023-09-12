declare namespace API {
    type Voucher = {
        id: string;
        couponCode: string;
        expiredDate: Date;
        fixedPrice?: number;
    }
}