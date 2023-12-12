import React, { useState } from 'react';

const Toolsidebar = () => {
    const [modalContent, setModalContent] = useState(null);

    const handleRemoteFileClick = () => {
        setModalContent(
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/plants/" target="_blank">Ensemble</a>
                </span>
                <span className="input-group-text" id="basic-addon2">
                    <a href="https://ftp.ncbi.nlm.nih.gov/genomes/refseq/plant/" target="_blank">RefSeq</a>
                </span>
                <span className="input-group-text" id="basic-addon3">
                    <a href="https://download.maizegdb.org/" target="_blank">MaizeGDB</a>
                </span>
            </div>
        );
    };

    const handleUploadFileClick = () => {
        setModalContent(
            <div className="input-group mb-3">
                <input type="file" name="file" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        );
    };

    const handlePasteFileClick = () => {
        setModalContent(
            <div className="input-group mb-3">
                <input type="text" name="file" className="form-control" placeholder="Data" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        );
    };

    return (
        <React.Fragment>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-light" style={{ height: '90vh', textAlign: 'center' }}>
            <h1>Tools</h1>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item m-1">
                        <a href="#" className aria-current="page" data-bs-toggle="modal" data-bs-target="#modalId">
                            Upload Data
                        </a>
                    </li>
                    <li className="nav-item m-1">
                        <a href="#" className aria-current="page">
                            Promoter Squence Extraction
                        </a>
                    </li>
                    <li className="nav-item m-1">
                        <a href="#" className aria-current="page">
                            Prediction Model
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-black color-black text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="./navbar-brand.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                        <strong>John Doe</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
            <div className="modal fade" id="modalId" tabIndex={-1} role="dialog" aria-labelledby="modalTitleId" aria-hidden="true" style={{ height: '60vh' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ width: '80vh' }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">Upload Data</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            {modalContent}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleUploadFileClick}>Upload Data</button>
                            <button type="button" className="btn btn-secondary" onClick={handleRemoteFileClick}>Choose Remote File</button>
                            <button type="button" className="btn btn-secondary" onClick={handlePasteFileClick}>Paste/Fetch Data</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Toolsidebar;
