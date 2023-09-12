
import { useContext } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import DataController from '../../context/controller';
import NotFound from '../NotFound/NotFound';
import { StyledButton, StyledContainerColumn } from '../UI/ui-styled-components';
import { highlightColorRed } from '../../styles/variables';
import { ContainerModal } from './styled-Modal';

export default function ModalPlayVideo() {
    const { dataVideos } = useContext(DataController);
    const { id } = useParams()
    const index = dataVideos[id - 1]
    const url = index.url

    if (!index) {
        return <NotFound />
    }

    return (
        <ContainerModal>
            <StyledContainerColumn>
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
            </StyledContainerColumn>
        </ContainerModal>
    );
}

