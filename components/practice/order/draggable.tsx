import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

type DraggableProps = {
    children: ReactNode;
    id: UniqueIdentifier;
}

const Draggable: React.FC<DraggableProps> = (props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    );
}

export default Draggable