const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

exports.docxToPdf = async (req, res) => {

    if(req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        return res.status(400).send('Invalid file type.');
    }

    const inputPath = req.file.path;
    const outputDir = path.join(__dirname, 'output');
    const outputPath = path.join(outputDir, `${path.parse(req.file.filename).name}.pdf`);

    const libreOfficeCmd = `libreoffice --headless --convert-to pdf --outdir ${outputDir} ${inputPath}`;

    exec(libreOfficeCmd, (err, stdout, stderr) => {
        if (err) {
            console.error('Conversion failed:', err);
            return res.status(500).send('Can not convert.');
        }

        res.download(outputPath, (err) => {
            if (err) {
                console.error('Download failed:', err);
            }

            fs.unlinkSync(inputPath);
            fs.unlinkSync(outputPath);
        });
    });
};

exports.pptxToPdf = async (req, res) => {

    if(req.file.mimetype !== 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
        return res.status(400).send('Invalid file type.');
    }

    const inputPath = req.file.path;
    const outputDir = path.join(__dirname, 'output');
    const outputPath = path.join(outputDir, `${path.parse(req.file.filename).name}.pdf`);

    const libreOfficeCmd = `libreoffice --headless --convert-to pdf --outdir ${outputDir} ${inputPath}`;

    exec(libreOfficeCmd, (err, stdout, stderr) => {
        if (err) {
            console.error('Conversion failed:', err);
            return res.status(500).send('Can not convert.');
        }

        res.download(outputPath, (err) => {
            if (err) {
                console.error('Download failed:', err);
            }

            fs.unlinkSync(inputPath);
            fs.unlinkSync(outputPath);
        });
    });
};

exports.xlsxToPdf = async (req, res) => {

    if(req.file.mimetype !== 'application/vnd.ms-excel') {
        return res.status(400).send('Invalid file type.');
    }

    const inputPath = req.file.path;
    const outputDir = path.join(__dirname, 'output');
    const outputPath = path.join(outputDir, `${path.parse(req.file.filename).name}.pdf`);

    const libreOfficeCmd = `libreoffice --headless --convert-to pdf --outdir ${outputDir} ${inputPath}`;

    exec(libreOfficeCmd, (err, stdout, stderr) => {
        if (err) {
            console.error('Conversion failed:', err);
            return res.status(500).send('Can not convert.');
        }

        res.download(outputPath, (err) => {
            if (err) {
                console.error('Download failed:', err);
            }

            fs.unlinkSync(inputPath);
            fs.unlinkSync(outputPath);
        });
    });
};