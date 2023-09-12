import { DeleteModal, WarningModal } from "../TableData/styled-TableData";
import { StyledButton } from "../UI/ui-styled-components";
import { highlightColorRed, secondaryGray } from "../../styles/variables";

function ModalDelete({ warning, setConfirmDelete, setWarning }) {
    return (
        <DeleteModal display={warning ? 'flex' : 'none'}>
            <WarningModal>
                <h3>Você realmente deseja remover?</h3>

                <div>
                    <StyledButton
                        bgcolor={highlightColorRed}
                        style={{ marginRight: '1rem' }}
                        onClick={() => setConfirmDelete(true)}
                    >
                        Sim
                    </StyledButton>
                    <StyledButton
                        bgcolor={secondaryGray}
                        onClick={() => setWarning(false)}
                    >Não</StyledButton>
                </div>
            </WarningModal>
        </DeleteModal>
    );
}

export default ModalDelete;