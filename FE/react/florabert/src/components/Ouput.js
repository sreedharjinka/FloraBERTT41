import React from 'react';

const Output = () => {
    return (
        <React.Fragment>
            <a href="/path/to/textfile.txt" download className="btn btn-primary">Download Text File</a>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Tissue</th>
                        <th>TPM Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tissue 1</td>
                        <td>Value 1</td>
                    </tr>
                    <tr>
                        <td>Tissue 2</td>
                        <td>Value 2</td>
                    </tr>
                    <tr>
                        <td>Tissue 3</td>
                        <td>Value 3</td>
                    </tr>
                    <tr>
                        <td>Tissue 4</td>
                        <td>Value 4</td>
                    </tr>
                    <tr>
                        <td>Tissue 5</td>
                        <td>Value 5</td>
                    </tr>
                    <tr>
                        <td>Tissue 6</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Tissue 7</td>
                        <td>Value 7</td>
                    </tr>
                    <tr>
                        <td>Tissue 8</td>
                        <td>Value 8</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Output;
