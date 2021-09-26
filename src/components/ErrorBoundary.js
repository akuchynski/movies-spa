import React from "react";

function ErrorBoundary(props) {
    const OopsText = () => (
        <h2>
            Oops, something went wrong...
        </h2>
    )

    let isEverythingOk = true;

    return <>{isEverythingOk ? props.children : <OopsText />}</>
}

export default ErrorBoundary