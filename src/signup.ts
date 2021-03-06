import { Router } from 'express';

const router = Router();
let count = 0;

router.get('/', (req, res) => {
  res.send("sign up");
});

router.post('/', (req, res) => {
  count += 1;
  if (count % 5 === 0) {
    return res.status(500).json({ error: { code: 500, message: 'Error while signup' }});
  }

  const { id, password, name, phoneAddress, emailAddress, advertisement } = req.body;

  if (!(id && password && name && phoneAddress && emailAddress && advertisement)) {
    return res.status(400).json({ error: { code: 1100, message: '회원가입 폼에 없는 항목이 있습니다.' }, data: req.body });
  }

  console.info(`[New User Signup]
id: ${id}, password: ${password}, name: ${name}, phoneAddress: ${phoneAddress}, emailAddress: ${emailAddress}, advertisement: ${advertisement}`);

  return res.json(req.body);
});

router.post('/id', (req, res) => {
  const id = req.query.id;

  if (id === 'ryuina') {
    return res.status(400).json({ error: { code: 1200, message: '중복된 아이디 입니다.' }});
  }

  console.info(`[Id Check]
id: ${id}`);

  return res.sendStatus(200);
})

export default router;