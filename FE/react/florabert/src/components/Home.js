import React from 'react';
import ReactDOM from 'react-dom';
import Toolsidebar from './Toolsidebar';
import About from './About';
import Footer from './Footer';
import History from './History';
const Home = () => {
    return (
        <React.Fragment>
            <div class="container-fluid g-0 p-0 ms-0 me-0">
                <div class="row m-0 g-0 p-0">
                    <div class="col-2 g-0 p-0 ms-0 me-0 ">
                        <Toolsidebar />
                    </div>
                    <div class="col-8 g-0 p-0 ms-0 me-0 mt-3 mb-auto p-5">
                        <About />
                        <Footer />
                    </div>
                    <div class="col-2 g-0 p-0 ms-0 me-0 ">
                        <History/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;