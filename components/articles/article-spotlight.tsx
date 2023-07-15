import { useEffect, useState } from "react"
import { listArticle } from "@/services/article";
import Link from "next/link";
import { Nunito_Sans, Poppins } from 'next/font/google'

const nunito = Nunito_Sans({
    subsets: ['latin'],
    weight: ["700", "400"]
})

const ArticleSpotlight: React.FC = () => {

    const [articles, setArticles] = useState<API.Article[]>([]);

    useEffect(() => {
        listArticle({
            current: 1,
            pageSize: 4
        }).then(response => {
            setArticles(response.data);
        })
    }, []);

    const subSummary = (summary: string) => {
        if (!summary) {
            return summary;
        }
        if (summary.length > 130) {
            return summary.substring(0, 130) + '...'
        }
        return summary;
    }

    const subTitle = (text: string) => {
        if (!text) {
            return text;
        }
        if (text.length > 60) {
            return text.substring(0, 60) + '...'
        }
        return text;
    }

    return (
        <div>
            <div className={`${nunito.className} text-center`} style={
                {
                    color: '#2F327D',
                    fontSize: 36,
                    fontWeight: 700,
                    lineHeight: '180%'
                }
            }>Tin tức mới</div>
            <div className="text-gray-400 md:mb-20 mb-4 text-center text-xl" style={nunito.style}>Xem những thông tin cập nhật mới nhất từ chúng tôi</div>
            <div className="grid md:grid-cols-2 md:gap-20 gap-4 md:mb-20 mb-10" data-aos="fade-up">
                <div>
                    {
                        articles && articles.length > 0 && (
                            <div>
                                <div className="mb-8">
                                    <picture>
                                        <img src={articles[0].imagePath} alt={articles[0].title} height={340} loading="lazy" className="w-full" />
                                    </picture>
                                </div>
                                <div className="mb-4">
                                    <button type="button" className="px-6 py-1 bg-blue-500 text-white rounded-full">Tin tức</button>
                                </div>
                                <div style={{
                                    maxWidth: 640
                                }}>
                                    <div className="font-medium md:text-3xl text-xl mb-4 hover:text-blue-500">
                                        <Link href={`/tin-tuc/${articles[0].seo}`}>
                                            {articles[0].title}
                                        </Link>
                                    </div>
                                    <div className="text-gray-400 mb-8">{articles[0].summary}</div>
                                    <div className="mb-4 text-slate-500 font-medium">
                                        <Link href={`/tin-tuc/${articles[0].seo}`}>
                                            <u>Đọc tiếp</u>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        articles && articles.filter(x => x.articleID !== articles[0].articleID)?.map(article => (
                            <div key={article.articleID} className="mb-10">
                                <div className="flex gap-10 flex-col md:flex-row">
                                    <div className="relative">
                                        <picture>
                                            <img src={article.imagePath} alt={article.title} width={280} height={200} loading="lazy" />
                                        </picture>
                                        <button type="button" className="px-4 bg-blue-400 uppercase text-white rounded-full absolute bottom-5 right-5">Tin tức</button>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-2xl mb-4 hover:text-blue-500">
                                            <Link href={`/tin-tuc/${article.seo}`}>
                                                {subTitle(article.title)}
                                            </Link>
                                        </div>
                                        <div className="text-gray-400">{subSummary(article.summary)}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ArticleSpotlight