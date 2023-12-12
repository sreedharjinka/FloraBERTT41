import React from 'react';
import ReactDOM from 'react-dom';
const Footer = () => {
    return (
        <React.Fragment>
            <div className="container fixed-bottom mb-0">
                <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top overflow-hidden">
                    <ul className="col-md-4 justify-content-center align-items-center list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary mx-5" href="#">
                            <img src="./images/github.svg" alt="" height="32px" />
                        </a></li>
                        <li className="ms-3"><a className="text-body-secondary mx-5" href="#">
                            <img src="./images/kaggle.svg" alt="" height="32px" />
                        </a></li>
                        <li className="ms-3"><a className="text-body-secondary mx-5" href="#">
                            <img src="./images/huggingface.svg" alt="" height="32px" />
                        </a></li>
                    </ul>
                </footer>
            </div>

        </React.Fragment>
    )
}
export default Footer;