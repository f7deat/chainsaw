import { ModalForm, ProList } from "@ant-design/pro-components"

type AddStudentFormProps = {
    open: boolean;
    setOpen: any;
}

const AddStudentForm: React.FC<AddStudentFormProps> = (props) => {
    return (
        <ModalForm title="Thêm học sinh vào lớp" open={props.open} onOpenChange={props.setOpen}>
            <ProList
                search={{
                    layout: "vertical"
                }}
            />
        </ModalForm>
    )
}

export default AddStudentForm