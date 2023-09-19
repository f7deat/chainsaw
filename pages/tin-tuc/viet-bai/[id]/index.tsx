import { ProCard, ProForm, ProFormInstance, ProFormSelect, ProFormText } from "@ant-design/pro-components";
import Head from "next/head";
import 'react-quill/dist/quill.snow.css';
import { useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import { getArticle } from "@/services/article";
import dynamic from "next/dynamic";

export default function Index() {

    const formRef = useRef<ProFormInstance>();
    const router = useRouter();
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    useEffect(() => {
        const id = router?.query?.id;
        if (id && id !== '0') {
            getArticle(id).then(response => {
                if (!response) {
                    return;
                }
                formRef.current?.setFields([
                    {
                        name: 'title',
                        value: response.title
                    },
                    {
                        name: 'title',
                        value: response.title
                    },
                    {
                        name: 'detail',
                        value: response.detail
                    },
                    {
                        name: 'articleCatID',
                        value: response.categoryId
                    },
                    {
                        name: 'imagePath',
                        value: response.imagePath
                    }
                ])
            })
        }
    }, [router?.query?.id]);

    return (
        <>
            <Head>
                <title>Viết bài mới</title>
            </Head>
            <main>
                <ProCard>
                    <ProForm formRef={formRef}>
                        <ProFormText name="title" label="Tiêu đề" rules={[
                            {
                                required: true
                            }
                        ]} />
                        <ProFormText name="imagePath" label="Thumbnail" rules={[
                            {
                                required: true
                            }
                        ]} />
                        <div className="mb-16">
                            <ProForm.Item name="detail" label="Nội dung">
                                <ReactQuill theme="snow" className="h-72" />
                            </ProForm.Item>
                        </div>
                        <ProFormSelect name="articleCatID" label="Danh mục" params={undefined} debounceTime={undefined} request={undefined} valueEnum={undefined} />
                    </ProForm>
                </ProCard>
            </main>
        </>
    )
}