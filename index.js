import dotenv from 'dotenv'
import express from 'express'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config( { path: '.env' } )
const app = express();
app.use(express.json());


app.use('/api', contactRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
