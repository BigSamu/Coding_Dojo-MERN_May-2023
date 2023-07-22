const DataCard = (props) => {
    return (
        <div>
            {props.data ?
                <pre>
                    <h1>{props.data.name}</h1>
                    {Object.keys(props.data).slice(0, 4).map((key) =>
                        <p>{key}: {props.data[key]}</p>
                    )}
                </pre> :
                null}
        </div>
    )
}

export default DataCard