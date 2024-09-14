const express = require('express');
const app = express();
const cors = require('cors');
const pdfDocxConversionRoutes = require('./routes/pdfDocxConversionRoutes');

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(pdfDocxConversionRoutes);

app.use((req, res, next) => {
    return res.status(404).json({ message: 'Not Found' });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});