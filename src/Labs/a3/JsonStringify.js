import JsonPre from "../JsonPre";
function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
        <>
            <h2>JSON Stringify</h2>
            squares: {squares}<br />
            squares = {JSON.stringify(squares)}<br />
            <JsonPre json={squares} />
        </>
    )
}
export default JsonStringify;