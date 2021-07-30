import React from 'react';

export class ErrorPage extends React.Component {

    render() {
        return(
            <>
                <div className="error-wrapper">
                    <h2 className="error-page-heading">Oops, JSON - SERVER belum JALAN!</h2>
                    <h4 className="error-page-text">Silahkan, jalankan json-server --watch db.json --port 3001 .</h4>
                </div> 
            </>
        )
    }
}