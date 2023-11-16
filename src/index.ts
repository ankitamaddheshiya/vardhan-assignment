import express from 'express';
import { connectDB } from './config/db';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 8000;


connectDB();
app.get("/",(req,res)=>{
  res.send("Welcome to the Library App");
})
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
