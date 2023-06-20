import loading from '../../assets/loading.gif'

export default function Loading() {
    return (
        <>
            <img
                src={loading}
                alt='Loading'
                style={{
                    width: '8rem',
                    margin: '5% 46%'
                }}
            />
            <h3> Loading...</h3>
        </>
    )
}