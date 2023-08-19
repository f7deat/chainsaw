import { Modal } from "antd";

type SelectClassroomProps = {
    open: boolean;
    setOpen: any;
}

const SelectClassroom: React.FC<SelectClassroomProps> = (props) => {

    const { open, setOpen } = props;

    const classrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <Modal open={open} footer={false} onCancel={() => setOpen(false)} title="Chọn lớp học" centered>
            <div className="grid grid-cols-4 gap-4">
                {
                    classrooms.map(x => (
                        <button type="button" key={x}>
                            <div className="h-16 flex items-center justify-center rounded bg-slate-100 hover:border-blue-500 border font-medium">
                                Lớp {x}
                            </div>
                        </button>
                    ))
                }
            </div>
        </Modal>
    )
}

export default SelectClassroom