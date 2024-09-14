import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import axios from 'axios';

const WordToPdf = () => {

    const [isUploading, setIsUploading] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {

        if (acceptedFiles.length > 1) {
            toast.error('You can only upload one file at a time');
            return;
        }

        const file = acceptedFiles[0];
        if (file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            toast.error('Only Word files are allowed');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        setIsUploading(true);
        axios.post('https://api.morphify.me/docx-to-pdf', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'blob'
        })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${file.name}-converted.pdf`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
                toast.success('File converted and downloaded successfully!');
            })
            .catch(error => {
                toast.error('An error occurred during file conversion');
            })
            .finally(() => {
                setIsUploading(false);
            });

    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, disabled: isUploading });

    return (
        <div className="container border border-0 rounded shadow p-4">
            <div className="card-header">
                <h3>Upload Word File</h3>
            </div>
            <div className="card-body">
                {
                    isUploading ? (
                        <div className="container">
                            <div className="spinner-border text-primary text-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
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
                    )
                }
            </div>
        </div>
    );
};

export default WordToPdf;
