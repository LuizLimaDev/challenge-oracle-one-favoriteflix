import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataController from '../context/controller'

const useCategoryForm = () => {
    const {
        postCategory,
        categoriesData,
        dataCategories,
        uptateCategory
    } = useContext(DataController)
    const { id } = useParams()
    const [categoryTitle, setCategoryTitle] = useState('')
    const [color, setColor] = useState('#000')
    const [sended, setSended] = useState(false)
    const [warning, setWarning] = useState(false)

    useEffect(() => {
        if (id !== undefined) {
            setCategoryTitle(dataCategories[id - 1].title)
            setColor(dataCategories[id - 1].color)
        }
    }, [id, dataCategories])

    async function onSave(event) {
        event.preventDefault();

        const data = {
            title: categoryTitle,
            color: color,
            database: false
        };

        if (id !== undefined) {
            uptateCategory(id, data)
        } else {
            postCategory(data)
        }

        categoriesData()
        setCategoryTitle('')
        setWarning(true);

        setTimeout(() => {
            setWarning(false);

            setSended(true)
        }, 2000)
    }

    return {
        id,
        categoryTitle,
        setCategoryTitle,
        color,
        setColor,
        sended,
        warning,
        onSave,
    }
}

export default useCategoryForm;