import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err); // Logs the error for debugging purposes

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Oopsss!!</h1>
            <h3>Something went wrong</h3>
            {err && (
                <div>
                    <h3 className="text-red-500">
                        {err.status} : {err.statusText || 'Unknown Error'}
                    </h3 >
                    <p className="text-red-500">
                        {err.data?.message || 'An unexpected error has occurred.'}</p>
                </div>
            )}
        </div>
    );
};

export default Error;
