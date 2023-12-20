import React from 'react';
import ReactDOM from 'react-dom';
const History = () => {
    const historyData = [
        { title: "Card 1", subtitle: "Subtitle 1", link: "#" },
        { title: "Card 2", subtitle: "Subtitle 2", link: "#" },
        { title: "Card 3", subtitle: "Subtitle 3", link: "#" },
        { title: "Card ", subtitle: "Subtitle 1", link: "#" },
        { title: "Card ", subtitle: "Subtitle 2", link: "#" },
        { title: "Card ", subtitle: "Subtitle 3", link: "#" },
        { title: "Card ", subtitle: "Subtitle 1", link: "#" },
        { title: "Card ", subtitle: "Subtitle 2", link: "#" },
        { title: "Card ", subtitle: "Subtitle 3", link: "#" },
    ];

    return (
        <React.Fragment>
            <div className="overflow-auto d-flex flex-column flex-shrink-0 p-3 text-bg-light h-90 g-0 p-0 ms-0 me-0" style={{ height: '90vh', textAlign: 'center' }} >
                <h1>
                    History
                </h1>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    {historyData.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a href={item.link} className="nav-link">
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    )
}
export default History;