const Error = ({sms}) => {
    return (
        <div className="alert alert-danger mt-4 col-6" role="alert">
            {sms}
        </div>
    )
}

export default Error