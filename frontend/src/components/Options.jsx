import React from 'react'
import { Link } from 'react-router-dom'

const Options = () => {
    return (
        <div className="container border border-0 rounded shadow my-3 p-4">
            <h1>'TO' Options</h1>
            <hr />
            <div className="row">
                <div className="col-12">
                    <div className="row mb-2 p-2">
                        <div className="col-md-6">
                            <img src="/images/word_to_pdf.png" alt="option" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2>Word to PDF</h2>
                            <p>Convert your Word documents to PDF format</p>
                            <Link to="/word-to-pdf" className="btn btn-primary">Convert</Link>
                        </div>
                    </div>
                    <hr />
                    <div className="row mb-2 p-2">
                        <div className="col-md-6">
                            <img src="/images/pptx_to_pdf.png" alt="option" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2>PPTX to PDF</h2>
                            <p>Convert your PPTX documents to PDF format</p>
                            <Link to="/pptx-to-pdf" className="btn btn-primary">Convert</Link>
                        </div>
                    </div>
                    <hr />
                    <div className="row mb-2 p-2">
                        <div className="col-md-6">
                            <img src="/images/pdf_to_word.png" alt="option" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2>PDF to Word</h2>
                            <p>Convert your PDF documents to DOCX format</p>
                            <button disabled className="btn btn-primary">Coming Soon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options