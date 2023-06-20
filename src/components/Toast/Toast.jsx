import { Alert, Slide } from "@mui/material";

function Toast({ activation, condition, textEdit, textAdd }) {
    return (
        <Slide direction="up" in={activation} mountOnEnter unmountOnExit>
            <Alert
                severity='success'
                variant='filled'
            >
                {condition
                    ? <h3>{textEdit}</h3>
                    : <h3>{textAdd}</h3>
                }
            </Alert>
        </Slide>
    );
}

export default Toast;