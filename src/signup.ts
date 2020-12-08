import { Router } from 'express';

const router = Router();
let count = 0;

router.get('/', (req, res) => {
  res.send("sign up");
});

router.post('/', (req, res) => {
  count += 1;
  if (count % 5 === 0) {
    return res.status(500).json('Error while signup');
  }

  return res.json({user: req.body});
});

router.post('/id', (req, res) => {
  if (req.body.id === 'ryuina') {
    return res.json({error: {code: 100, message: '중복된 아이디 입니다.'}});
  }
  return res.sendStatus(200);
})

export default router;