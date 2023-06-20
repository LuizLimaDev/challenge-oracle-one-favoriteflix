
import { useContext } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import DataController from '../../context/controller';
import NotFound from '../NotFound/NotFound';
import { StyledButton } from '../UI/ui-styled-components';
import { highlightColorRed } from '../UI/variables';
import { ContainerModal } from './styled-Modal';

export default function Modal() {
    const { dataVideos } = useContext(DataController);
    const { id } = useParams()
    const index = dataVideos[id - 1]
    const url = index.url

    if (!index) {
        return <NotFound />
    }

    return (
        <ContainerModal>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>

                <h1 style={{ textAlign: 'center' }}>
                    {index.title}
                </h1>

                <ReactPlayer
                    url={url}
                    width='70vw'
                    height='60vh'
                />

                <Link to='/' >
                    <StyledButton
                        bgcolor={highlightColorRed}
                        style={{ marginTop: '1.5rem' }}
                    >
                        Voltar
                    </StyledButton>
                </Link>
            </div>
        </ContainerModal>
    );
}

