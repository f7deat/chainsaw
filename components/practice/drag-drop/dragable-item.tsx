import { UniqueIdentifier, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { ReactNode } from 'react';

type DragableItemProps = {
    children: ReactNode;
    id: UniqueIdentifier;
    text: string;
}

const DragableItem: React.FC<DragableItemProps> = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
    } = useDraggable({ id: props.id, data: {
        text: props.text
    } });

    const style = {
        transform: CSS.Transform.toString(transform)
    };

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {props.children}
        </li>
    );
}

export default DragableItem