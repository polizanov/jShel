const ErrorPage = ({message}) => {
    return (
        <section>
            <h1>Sorry, but your request could not be processed!</h1>
            <p>Меssage: {message}</p>
        </section>
    )
}

export default ErrorPage;