import notFoundImg from '../../assets/not-found.png';
import { StyledContainer } from './styleed-NotFound';

export default function NotFound() {
    return (
        <StyledContainer>
            <img
                src={notFoundImg}
                alt="Página não encontrada!"
                style={{ width: '15rem' }}
            />
            <h1 style={{ marginTop: '1.5rem' }}>
                Ops.. página não encontrada!
            </h1>
        </StyledContainer>
    );
}
