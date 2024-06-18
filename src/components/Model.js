import React, { Fragment } from "react";

export default function Model(props){
    const {title, target, modelLabel} = props;
    return(
        <Fragment>
            {/* Modal */}
            <div className="modal fade" id={target} tabindex="-1" aria-labelledby={modelLabel} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-uppercase" id={modelLabel} > {title} </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}