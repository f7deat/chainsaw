import { ArrowLeftOutlined, ArrowRightOutlined, EyeOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Link from "next/link";

type ArticleProps = {
    articles: API.Article[]
}

const ArticleRelated: React.FC<ArticleProps> = (props) => {
    const { articles } = props;

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-medium text-blue-800">Bài viết liên quan</div>
                <Link href="/tin-tuc" className="text-blue-500 font-medium border-b">
                    Xem tất cả
                </Link>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
                {
                    articles.map(article => (
                        <ArticleItem article={article} key={article.articleID} />
                    ))
                }
            </div>
            <div className="flex gap-2 justify-end mt-4">
                <button type="button" className="h-10 w-10 bg-blue-500 opacity-75 text-white rounded">
                    <ArrowLeftOutlined />
                </button>
                <button type="button" className="h-10 w-10 bg-blue-500 text-white rounded">
                    <ArrowRightOutlined />
                </button>
            </div>
        </div >
    )
}

type ArticleItemProps = {
    article: API.Article;
}

const ArticleItem: React.FC<ArticleItemProps> = (props) => {

    const { article } = props;

    return (
        <div className="shadow rounded flex flex-col bg-white">
            <Link href={`/tin-tuc/${article.seo}`}>
                <picture className="h-52 bg-gray-900 block">
                    <img src={article.imagePath} alt={article.title} className="w-full rounded h-52 object-cover hover:opacity-50 transition duration-500" />
                </picture>
            </Link>
            <div className="p-2">
                <div className="font-medium text-lg mb-2 line-clamp2" style={{
                    minHeight: 52
                }}>
                    <Link href={`/tin-tuc/${article.seo}`}>
                        <span dangerouslySetInnerHTML={{ __html: article.title }}></span>
                    </Link>
                </div>
                <div className="text-gray-400 mb-4 line-clamp3" dangerouslySetInnerHTML={{ __html: article.summary }} style={{
                    minHeight: 60
                }}></div>
                <div className="flex justify-between">
                    <Link href={`/tin-tuc/${article.seo}`} className="font-medium text-gray-400 border-b">Đọc tiếp</Link>
                    <span className="text-gray-400">
                        <EyeOutlined /> {article.counter}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ArticleRelated