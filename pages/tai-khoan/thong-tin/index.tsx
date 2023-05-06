import AccountLeftBar from "@/components/tai-khoan/left-bar";
import ParentInfo from "@/components/tai-khoan/parent";
import StudentInfo from "@/components/tai-khoan/student";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Col, Empty, Row } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function Profile() {

  const [tab, setTab] = useState<string>('student');


  return (
    <>
      <Head>
        <title>Thông tin cá nhân</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer title="Thông tin cá nhân">
        <Row gutter={16}>
          <Col md={8}>
            <AccountLeftBar tab={0} />
          </Col>
          <Col md={16}>
            <ProCard
              tabs={{
                activeKey: tab,
                tabPosition: 'top',
                items: [
                  {
                    label: 'Content',
                    key: 'student',
                    children: <StudentInfo />,
                  },
                  {
                    label: 'Đổi mật khẩu',
                    key: 'setting',
                    children: <Empty />,
                  },
                  {
                    label: 'Thông tin phụ huynh',
                    key: 'parent',
                    children: <ParentInfo />,
                  },
                ],
                onChange: (key) => {
                  setTab(key);
                },
              }} />
          </Col>
        </Row>
      </PageContainer>
    </>
  )
}