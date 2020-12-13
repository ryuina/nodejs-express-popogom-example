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

  const { id, password, name, phoneAddress, emailAddress, advertisement } = req.body;

  console.info(`[New User Signup]
id: ${id}, password: ${password}, name: ${name}, phoneAddress: ${phoneAddress}, emailAddress: ${emailAddress}, advertisement: ${advertisement}`);

  if (!(id && password && name && phoneAddress && emailAddress && advertisement)) {
    return res.json({error: {code: 100, message: '회원가입 폼에 없는 항목이 있습니다.', data: req.body }});
  }
  return res.json(req.body);
});

router.post('/id', (req, res) => {
  const id = req.query.id;
  console.info(`[Id Check]
id: ${id}`);
  if (id === 'ryuina') {
    return res.json({ error: { code: 200, message: '중복된 아이디 입니다.' }});
  }
  return res.sendStatus(200);
})

export default router;