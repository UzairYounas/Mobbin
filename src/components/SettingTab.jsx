import React from 'react'

function SettingTab() {
    return (
        <>
            <div className={toggleState === 1 ? "d-block mt-4 p-l-32 p-r-32" : "d-none mt-4 p-l-32 p-r-32"}>
                <div>
                    <input type="file" onChange={handleFileChange} />
                    {selectedFile ? (
                        <div>
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Uploaded"
                                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
                            />
                            <br />
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    ) : (
                        <p>No file selected</p>
                    )}
                </div>
                <h4 className='tit8'>User Name</h4>
                <p className='para3'>user@gmail.com</p>

                <h2 className='tit3 mt-5 mb-3'>Personal details</h2>

                <div className='mt-4'>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='tit6 mb-0'>Name</p>
                        <button className='btn-15'>Edit</button>
                    </div>
                    <p className="para3">user name</p>
                    <hr className="hr2" />
                </div>

                <div className='mt-4'>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='tit6 mb-0'>Email Address</p>
                        <button className='btn-15'>Edit</button>
                    </div>
                    <p className="para3">user@gmail.com</p>
                    <hr className="hr2" />
                </div>

                <div className='mt-4'>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='tit6 mb-0'>Password</p>
                        <button className='btn-15'>Edit</button>
                    </div>
                    <p className="para3">******</p>
                    <hr className="hr2" />
                </div>

                <h3 className='tit6 mt-5 mb-4'>Manage account</h3>
                <div className="d-flex align-items-center justify-content-between">
                    <p className='tit6 mb-0'>Delete account</p>
                    <button className='btn-14'>Edit</button>
                </div>
                <p className="para3">permanently delete your Mobbin account</p>
            </div>
        </>
    )
}

export default SettingTab
