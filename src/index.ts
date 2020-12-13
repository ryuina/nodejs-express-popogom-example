import express from 'express';
import signup from './signup';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.use('/signup', signup);


