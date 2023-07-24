import { ArrowLeftOutlined, ArrowRightOutlined, EyeOutlined } from "@ant-design/icons";
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
            <div className="grid md:grid-cols-3 md:gap-8 gap-4 mb-4">
                {
                    articles.map(article => (
                        <ArticleItem article={article} key={article.articleID} />
                    ))
                }
            </div>
            <div className="flex gap-2 justify-end">
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
        <div className="shadow rounded p-4 flex flex-col bg-white">
            <picture className="h-64 mb-4">
                <img src={article.imagePath} alt={article.title} className="w-full rounded h-64 object-cover" />
            </picture>
            <div className="font-medium text-xl mb-2">
                <Link href={`/tin-tuc/${article.seo}`}>
                    <span dangerouslySetInnerHTML={{ __html: article.title }}></span>
                </Link>
            </div>
            <div className="text-gray-400 mb-4" dangerouslySetInnerHTML={{ __html: article.summary}}>

            </div>
            <div className="flex justify-between">
                <Link href={`/tin-tuc/${article.seo}`} className="font-medium text-gray-400 border-b">Đọc tiếp</Link>
                <span className="text-gray-400">
                    <EyeOutlined /> {article.counter}
                </span>
            </div>
        </div>
    )
}

export default ArticleRelated