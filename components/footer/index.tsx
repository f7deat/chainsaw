import { FacebookOutlined, GithubOutlined, GoogleOutlined, TwitterOutlined } from "@ant-design/icons"
import Link from "next/link"

const Footer: React.FC = () => {
    return (
        <footer className="text-white z-20 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1557.8 215.3"><g fill="#212e3d"><path d="M14 96l-20 5v28l12 7 22-14 21-12zM87 109l46-8 35 23 31 20 33-1h27l34 22-81-2-113-31-12-23zM1355 167l50-34 52 2 42-25 56 14-21 56-147 14-32-27z" /></g><path fill="#d7f1ff" d="M1095 186l-1-4c-6-32-41-78-85-95-11-5-24-17-37-28-21-19-42-39-69-39h-7l-4 1c-12 0-29-4-46-9-24-5-51-12-79-12h-12c-31 3-50 11-64 18-10 4-15 7-22 7l-4-1h-12c-17 0-39 4-59 11-23 8-36 17-40 28l-14 9c-17 11-40 26-52 47-18 30-19 66-19 74z" opacity=".5" /><path fill="#d7f1ff" d="M1072 186c-4-23-34-64-71-78s-68-69-102-65-89-24-142-20-62 28-95 24-86 16-88 26-50 29-67 58c-15 25-15 51-15 55z" opacity=".7" /><path fill="#fff" d="M1048 186c-48-84-153-142-275-142s-226 58-274 142z" /><path fill="#505a78" d="M1049 187H498v-1c24-42 62-77 110-103 49-25 106-39 165-39s117 14 166 39c48 26 86 61 110 103zm-549-1h547C998 100 890 45 773 45s-224 55-273 141z" /><path fill="#0098ff" d="M924 188l116 2 6-9c0-4-24-40-34-40 0 0-23 3-50-6s13-7-2-15-65-20-77-2c-12 17-11 41 0 54 10 12 37 4 41 16z" opacity=".2" /><path fill="#0098ff" d="M923 186h121c3-3 6-8 6-10 0-4-25-40-34-40 0 0-23 3-50-5s13-8-2-15-65-20-77-3-11 42 0 55c10 12 33 6 36 18z" /><path fill="#505a78" d="M1044 187H923l-1-1c-1-6-8-7-15-9-7-1-15-3-21-9a48 48 0 010-55c7-10 25-10 38-8 16 2 32 7 40 11l4 3c0 2-3 3-6 4l-5 3 9 4c27 9 50 6 50 6 6 0 16 12 21 19 7 9 13 19 13 21s-2 7-6 11zm-121-1h120c4-4 6-8 6-10 0-1-5-10-13-21-9-11-16-18-20-18-1 0-24 3-50-6-9-3-10-4-10-5 0-2 2-3 5-4l6-3-3-2c-15-8-65-20-77-3-13 18-10 41 0 53 5 6 13 8 20 9 7 2 14 3 16 10z" /><path fill="#0098ff" d="M576 105s-6 6 5 18 28 30 28 41 12 27 36 19c23-8 60 1 50-17s-29-9-44-29 29-4 32-20 23-24 16-36-10-23-16-26c-12-5-90 32-107 50z" opacity=".2" /><path fill="#0098ff" d="M572 103s-6 5 5 17c10 12 28 31 28 42s14 31 38 23 58-3 48-22-29-8-44-29 28-3 31-20 24-23 17-36-11-25-17-27c-12-6-90 34-106 52z" /><path fill="#505a78" d="M632 187c-7 0-12-2-16-5-8-5-12-14-12-20 0-11-16-29-27-40l-1-1c-4-6-7-10-6-14l1-4c9-10 34-25 55-35 21-11 46-21 52-18 5 2 8 9 12 18l6 10c4 7-1 13-7 19-4 5-9 10-10 17-1 9-12 9-21 9-6 0-11 1-13 3-1 2 0 4 3 8 7 10 15 12 23 15 8 2 16 4 21 14 2 3 2 6 1 9-3 5-14 7-26 9-8 1-17 2-24 5l-11 1zm-60-84l-1 4c0 3 1 7 6 13l1 1c11 12 27 30 27 41 0 5 4 14 12 19 5 4 13 7 25 3l25-5c12-1 22-3 25-8 1-2 0-4-1-8-5-9-12-11-20-13s-17-5-24-16c-3-4-4-6-3-8 2-4 7-4 14-4 9 0 18-1 20-8 1-8 6-13 10-18 6-6 10-11 6-17l-5-11c-4-8-7-15-11-17-6-2-25 5-51 18-21 10-46 25-55 34z" /><path fill="#0098ff" d="M779 46s-2 10 4 18c6 9 65 30 71 37 23 16 50-13 70-8 19 5 35 13 41 8s-85-55-187-55z" opacity=".2" /><path fill="#0098ff" d="M779 41s-2 10 4 18c6 9 65 30 71 37 23 16 50-13 70-8 19 5 35 13 41 8s-85-55-187-55z" /><path fill="#505a78" d="M870 102c-5 0-11-2-16-6l-29-14c-18-8-39-18-42-23-7-8-5-17-5-18 53 0 99 13 129 24 36 12 57 26 59 30l-1 2c-4 4-12 1-24-3l-17-5c-8-2-18 1-27 5s-18 8-27 8zm-15-7c13 10 27 4 41-2 10-4 20-8 28-6l17 6c11 3 20 6 24 3-1-4-22-17-58-30-30-11-76-24-127-24h-1c0 2-1 10 5 17 3 5 24 14 42 22l29 14z" /><path fill="#232323" d="M696 186l-16-21-20 21" opacity=".3" /><path fill="#edeef1" d="M693 186l-16-21-20 21" /><path fill="#505a78" d="M658 187l-1-1 20-22 16 22h-1l-15-20z" /><path fill="#232323" d="M933 78s19 11 29 23 25 26 34 51c8 25 7 34 7 34h53l-5-2-10-19-12-17-12-15-13-13-15-13-12-9-22-13-13-6z" opacity=".3" /><path fill="#edeef1" d="M937 78s19 11 29 23 25 26 34 51c8 25 7 33 7 33l2 1 46 2h2l-2-3-10-20-12-17-12-15-13-13-15-13-12-9-22-13-13-6z" /><path fill="#505a78" d="M1007 186a148 148 0 00-70-107v-2a150 150 0 0171 109z" /><path fill="#505a78" d="M1056 188c-21-44-50-71-70-86-23-16-41-22-41-22l1-1s18 6 40 22c21 15 50 42 71 87z" /><path fill="#232323" d="M518 158s7 19 18 28h-35s9-21 17-28z" opacity=".3" /><path fill="#edeef1" d="M516 158l-9 11-9 17h35l-5-5-8-12-3-7z" /><path fill="#505a78" d="M498 187l-1-1c8-18 19-29 19-29l1 1s-11 10-19 29zM533 187c-10-7-16-25-17-25l1-1c0 1 7 19 17 25z" /><path fill="#232323" d="M843 186c-17-13-40-51-40-51s-26 32-32 52" opacity=".3" /><path fill="#edeef1" d="M803 135l-11 19-12 21-6 11 66 1-9-8-10-12-8-13-6-13-2-4z" /><path fill="#505a78" d="M775 187h-1c7-16 28-52 28-52h2c-1 0-22 37-29 52zM839 188c-23-21-35-50-35-50l1-1s12 29 35 50z" /><path fill="#141c27" d="M303 160l-5 2-33-5-4-4-11-3-2-3-9-2-8-6-20 2-17-5-27-22-33 3-48-15-34 8-36-2-22 7v104l1570-1v-97l-31-16-34 17-35-9-31 33-36 11-53 4-14 12-32-5-8 8h-1l-25-3-16 6-71 5h-24l-74-9-22 5-482 4h-18l-48-5-46 3-39 1-15-2-12 2-2 1h-5l-35-9-10-8h-8l-11-6-10 4z" /><path fill="#1d2936" d="M67 138l-7 9 9 3 17 1h15l10-4-7-9-9 3H73z" /><path fill="#212f3f" d="M69 150l3-9 7 1h7v9z" /><path fill="#2c3e53" d="M72 141l-5-3 4-3 8-1h9l9 1 6 3-2 2-15 2h-7z" /><path fill="#141c27" d="M75 140l-3-2 3-1 6-1h7l6 1 5 1-2 2-9 1h-8z" /><path fill="#1d2936" d="M82 139l-5 1 3 1h8l5-1-5-1z" /><path fill="#182331" d="M101 151v-11l2-2 8 9z" /><path fill="#1d2936" d="M135 152l-5 6 6 2 14 1h10l9-3-6-6-7 2h-17z" /><path fill="#212f3f" d="M136 160l2-6 6 1h6v6z" /><path fill="#2c3e53" d="M138 154l-3-2 3-2 6-1 7-1 7 1 5 2-2 2-11 2h-6z" /><path fill="#141c27" d="M141 153l-2-1 2-2h15l3 2-1 1-7 1-6-1z" /><path fill="#1d2936" d="M146 152l-3 1h11l-3-1z" /><path fill="#182331" d="M161 161v-8l2-2 6 7z" /><path fill="#1d2936" d="M95 171l-5 5 5 2 13 1h10l7-3-5-5-6 2H99z" /><path fill="#212f3f" d="M96 178l2-6 5 1h5v6z" /><path fill="#2c3e53" d="M98 172l-4-1 3-2 6-1h13l4 2-2 2-10 1h-5z" /><path fill="#141c27" d="M100 172l-2-1 2-1 4-1h9l3 2h-1l-6 1h-5z" /><path fill="#1d2936" d="M105 171l-4 1h11l-3-1z" /><path fill="#182331" d="M118 179v-7l2-2 5 6z" /><path fill="#1d2936" d="M1436 168l-6 7 7 3 16 1h12l10-4-7-7-7 2h-20z" /><path fill="#212f3f" d="M1437 178l3-7 6 1h7v7z" /><path fill="#2c3e53" d="M1440 171l-4-3 3-2 7-2h9l8 1 5 3-2 2-13 2h-7z" /><path fill="#141c27" d="M1443 169l-3-1 2-1 6-1h6l6 1 4 1-2 1-8 1h-6z" /><path fill="#1d2936" d="M1449 169l-4 1h13l-4-2z" /><path fill="#182331" d="M1465 179l1-9 2-2 7 7z" /><path fill="#1d2936" d="M1485 157l-4 4 5 2 11 1h9l6-3-5-5-5 2h-14z" /><path fill="#212f3f" d="M1486 163l2-5 4 1h5v5z" /><path fill="#2c3e53" d="M1488 158l-3-1 2-2 5-1h6l6 1 3 1-1 2-9 1h-5z" /><path fill="#141c27" d="M1490 158l-2-1 2-1 3-1h5l4 1 3 1h-2l-5 1h-5z" /><path fill="#1d2936" d="M1494 157l-3 1h10l-3-1z" /><path fill="#182331" d="M1506 164v-6l1-1 5 4z" /><path fill="#141c27" d="M714 183l16-4 41 4zM891 183l44-7 14 6z" /></svg>
            <div className="bg-slate-900">
                <div className="container mx-auto">
                    <div className="p-8">
                        <div className="md:flex gap-4">
                            <div className="md:w-2/3">
                                <div className="mb-4 text-xl uppercase font-medium">Chăm sóc khách hàng</div>
                                <div className="md:flex gap-4">
                                    <div className="md:w-1/2">
                                        <div className="mb-2 font-bold">Trung tâm trợ giúp</div>
                                        <div className="mb-2">Email: <span>hotro@getvisa.vn</span></div>
                                        <div className="mb-2">Đường dây nóng: <span>0911.717.772</span></div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="mb-2">
                                            <Link href="/tin-tuc/hinh-thuc-thanh-toan">Hình thức thanh toán</Link>
                                        </div>
                                        <div className="mb-2">
                                            <Link href="/tin-tuc/tra-hang-hoan-tien">
                                                Trả hàng & hoàn tiền
                                            </Link>
                                        </div>
                                        <div className="mb-2">
                                            <Link href="/tin-tuc/chinh-sach-bao-mat">Chính sách bảo mật</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3 md:flex gap-4">
                                <div className="md:w-1/2">
                                    <div className="mb-4 text-xl uppercase font-medium">Giới thiệu</div>
                                    <div className="mb-2">
                                        <Link href="/tin-tuc/gioi-thieu-chuong-trinh">Giới thiêu chương trình</Link>
                                    </div>
                                    <div className="mb-2">
                                        <Link href="/lien-he">
                                            Liên hệ với chúng tôi
                                        </Link>
                                    </div>
                                    <div className="mb-2">
                                        <Link href="/admin/login">
                                            Chương trình Affiliate
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="border-b border-slate-600"></div>
                <div className="pt-4 px-4 flex md:flex-row flex-col items-center justify-between container mx-auto">
                    <div className="mb-4">
                        © All rights reserved. Made by <a href="https://getvisa.vn/" className="font-bold">GETVISA</a>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 items-center justify-end mb-4">
                        <div className="flex gap-6">
                            <Link href="/gioi-thieu">Giới thiệu</Link>
                            <Link href="/tin-tuc">Blog</Link>
                            <Link href="/faq/ho-tro">Hỗ trợ</Link>
                            <Link href="/faq/lien-he">Liên hệ</Link>
                        </div>
                        <div className="flex gap-6 items-center">
                            <a href="https://www.facebook.com/eleaningget"><FacebookOutlined /></a>
                            <TwitterOutlined />
                            <GoogleOutlined />
                            <GithubOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer