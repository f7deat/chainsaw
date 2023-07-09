import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';

type DropableItemProps = {
    children: ReactNode;
    id: UniqueIdentifier;

}

const DropableItem: React.FC<DropableItemProps> = (props) => {
    const {
        setNodeRef,
    } = useDroppable({ id: props.id });

    return (
        <li ref={setNodeRef}>
            {props.children}
        </li>
    );
}

export default DropableItem