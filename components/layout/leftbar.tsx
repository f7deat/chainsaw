import { Divider, Typography } from "antd";
import SubjectMenu from "../subject";
import ClassroomList from "./leftbar/classroom-list";

const Leftbar: React.FC = () => {
    return (
        <div className="p-4">
            <Typography.Title level={5}>Môn học</Typography.Title>
            <SubjectMenu />
            <Divider />
            <Typography.Title level={5}>Lớp học</Typography.Title>
            <ClassroomList />
        </div>
    )
}

export default Leftbar;