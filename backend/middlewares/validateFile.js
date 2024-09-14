const path = require('path');

const validateFile = (req, res, next) => {
    if (req.files && req.files.length > 1) {
        return res.status(400).json({ error: 'Only one file can be uploaded at a time.' });
    }

    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }
    
    next();
};

module.exports = validateFile;
