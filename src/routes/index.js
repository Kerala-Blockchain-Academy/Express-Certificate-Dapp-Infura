import { Router } from 'express';
import { web3, myContract, account } from '../instance.js';
import multer from 'multer';
import { create } from 'ipfs-http-client';
const router = Router();
const upload = multer();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/view', function (req, res) {
  let data = {
    course: '<Course>',
    certificateID: '<ID>',
    name: '<Name>',
    grade: '<Grade>',
    date: '<Date>',
  };
  res.render('viewCertificate', { data: data });
});

router.get('/issue', function (req, res) {
  res.render('issueCertificate', {
    formClass: '',
    messageClass: 'hidden',
    certificateID: '<ID>',
  });
});

router.post('/issue', upload.single('document'), async function (req, res) {
  let data = req.body;
  console.log(data);
  let document = req.file;

  /* IPFS */
  const ipfs = create('/ip4/127.0.0.1/tcp/5001');
  const upload = await ipfs.add(document.buffer);
  console.log(upload);
  const docHash = web3.utils.asciiToHex(upload.path);
  console.log(docHash);

  myContract.methods
    .issue(
      data.certificateID,
      data.course,
      data.name,
      data.grade,
      data.date,
      docHash,
    )
    .send({ from: account, gasLimit: '927000' })
    .then((txn) => {
      console.log(txn);
      res.render('issueCertificate', {
        formClass: 'hidden',
        messageClass: '',
        certificateID: data.certificateID,
      });
    });
});

router.post('/view', function (req, res) {
  let data = req.body;
  console.log(data);

  myContract.methods
    .Certificates(data.certificateID)
    .call()
    .then((result) => {
      console.log(result);
      result.certificateID = data.certificateID;
      result.document = web3.utils.hexToAscii(result.document);
      res.render('viewCertificate', { data: result });
    });
});

export default router;
