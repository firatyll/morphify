import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';


const PdfToWord = () => {
    const onDrop = useCallback((acceptedFiles) => {

        if (acceptedFiles.length > 1) {
            toast.error('You can only upload one file at a time');
            return
        }
        const file = acceptedFiles[0];
        if (file.type !== 'application/pdf') {
            toast.error('Only PDF files are allowed');
            return;
        }
        toast.success('File uploaded successfully');

    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="container border border-0 rounded shadow p-4">
            <div className="card-header">
                <h3>Upload PDF File</h3>
            </div>
            <div className="card-body">
                <div
                    {...getRootProps()}
                    className={`dropzone p-5 text-center border rounded ${isDragActive ? 'border-primary' : 'border-secondary'
                        }`}
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p className="text-primary">Drop and Upload!</p>
                    ) : (
                        <p>Drag and drop your files here or click to upload them</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PdfToWord