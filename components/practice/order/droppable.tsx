import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

type DroppableProps = {
    id: UniqueIdentifier;
    children: ReactNode;

}

const Droppable: React.FC<DroppableProps> = (props) => {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };


    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}

export default Droppable;