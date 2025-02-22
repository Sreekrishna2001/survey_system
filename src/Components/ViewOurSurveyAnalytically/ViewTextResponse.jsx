import React, { useState, useEffect } from 'react'

export default function ViewTextResponse({ Responses, index }) {

    const [resp, setresp] = useState([])
    const modaltabledataId1 ="#"+index+"";
    const modaltabledataId2 = ""+index+"" 

    useEffect(() => {
        console.log(Responses[index]);
        setresp(Responses[index]);
    }, []);

    return (
        <div>
            <div>
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target={modaltabledataId1} >
                    View Responses
                </button>
            </div>
            <div className="modal fade" id={modaltabledataId2} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Responses</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                {resp}
                                {
                                    resp ? 
                                    <div>
                                        {
                                            resp.map((data, i) => {
                                                return <div>
                                                    <label>{data}</label>
                                                    <br />
                                                    </div>
                                            })
                                        }
                                        </div>
                                        :""
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
