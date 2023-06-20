import { useEffect, useState } from 'react';

const useTableData = ({ dataType, deleteData, tableType }) => {
    const [warning, setWarning] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [elementId, setElementId] = useState();
    const tableElementType = tableType;

    function createDate(id, name, description, edit, remove, database) {
        return { id, name, description, edit, remove, database };
    }

    const rows = [
        dataType.map((item) => (
            createDate(item.id, item.title, item.description, 'Editar', 'Remover', item.database)
        ))
    ];

    function deleteElement(id) {
        setWarning(true)
        setElementId(id);
    }

    useEffect(() => {
        if (confirmDelete) {
            deleteData(elementId);
            setWarning(false);
            setConfirmDelete(false);
        }
    }, [confirmDelete, elementId, deleteData]);

    return {
        warning,
        setWarning,
        confirmDelete,
        setConfirmDelete,
        elementId,
        setElementId,
        tableElementType,
        createDate,
        rows,
        deleteElement
    }
}

export default useTableData;