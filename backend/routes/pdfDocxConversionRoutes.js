const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const conversionController = require('../controllers/pdfDocxConversionController');
const validateFile = require('../middlewares/validateFile');

router.post('/docx-to-pdf',  upload.single('file'), (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return res.status(400).json({ error: 'Only one file can be uploaded at a time.' });
        }
    }
    next(err); 
}, validateFile , conversionController.docxToPdf);

router.post('/pptx-to-pdf',  upload.single('file'), (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return res.status(400).json({ error: 'Only one file can be uploaded at a time.' });
        }
    }
    next(err); 
}, validateFile , conversionController.pptxToPdf);

router.post('/xlsx-to-pdf',  upload.single('file'), (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return res.status(400).json({ error: 'Only one file can be uploaded at a time.' });
        }
    }
    next(err); 
}, validateFile , conversionController.xlsxToPdf);

module.exports = router;