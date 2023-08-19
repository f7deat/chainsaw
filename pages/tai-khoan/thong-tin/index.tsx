import AddMember from "@/components/accounts/add-member";
import ChangePasswordComponent from "@/components/accounts/change-password";
import AccountLeftBar from "@/components/accounts/left-bar";
import ParentInfo from "@/components/accounts/parent";
import StudentInfo from "@/components/accounts/student";
import { AppContext } from "@/models/app-context";
import { Role } from "@/utils/constants";
import { ProCard } from "@ant-design/pro-components";
import Head from "next/head";
import { useContext, useState } from "react";

export default function Profile() {

  const [tab, setTab] = useState<string>('student');
  const { user } = useContext<API.AppContext>(AppContext);

  return (
    <>
      <Head>
        <title>Thông tin cá nhân</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="md:flex gap-4">
        <AccountLeftBar tab={0} />
        <div className="flex-1">
          <ProCard
            tabs={{
              activeKey: tab,
              tabPosition: 'top',
              items: [
                {
                  label: 'Thông tin cá nhân',
                  key: 'student',
                  children: <StudentInfo />,
                },
                {
                  label: 'Đổi mật khẩu',
                  key: 'setting',
                  children: <ChangePasswordComponent />,
                },
                {
                  label: 'Thông tin phụ huynh',
                  key: 'parent',
                  children: <ParentInfo />,
                  disabled: user?.roles?.includes(Role.Referal)
                },
                {
                  label: 'Thêm thành viên',
                  key: 'add',
                  children: <AddMember />,
                  disabled: user?.roles?.includes(Role.Referal)
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }} />
        </div>
      </div>
    </>
  )
}