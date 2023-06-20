import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DataController from '../context/controller'

const useVideoForm = () => {
    const {
        postVideo,
        videoData,
        dataVideos,
        updateVideo
    } = useContext(DataController)
    let { id } = useParams('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [poster, setposter] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [warning, setWarning] = useState(false)
    const nativage = useNavigate()

    useEffect(() => {
        if (id !== undefined) {
            setTitle(dataVideos[id - 1].title)
            setUrl(dataVideos[id - 1].url)
            setposter(dataVideos[id - 1].poster)
            setCategory(dataVideos[id - 1].category)
            setDescription(dataVideos[id - 1].description)
        }
    }, [id, dataVideos])

    async function onSave(event) {
        event.preventDefault();

        const video = {
            category,
            title,
            url,
            poster,
            description,
            database: false
        }

        if (id !== undefined) {
            updateVideo(id, video)

            setTimeout(() => {
                nativage('/editvideos')
            }, 2000)
        } else {
            postVideo(video)

            setTitle('')
            setUrl('')
            setposter('')
            setCategory('')
            setDescription('')
        }

        videoData()

        setWarning(true)
        setTimeout(() => {
            setWarning(false)
        }, 2000)
    }

    return {
        id,
        title,
        setTitle,
        url,
        setUrl,
        poster,
        setposter,
        category,
        setCategory,
        description,
        setDescription,
        warning,
        onSave
    }
}

export default useVideoForm;