const axios = require('axios');
const base64 = require('base-64');
const utf8 = require('utf8');
const hotpTotpGenerator = require('hotp-totp-generator');

const ReqJson = {
  github_url: 'YO_GITHUB_REPO',
  contact_email: 'YOUR_MAIL',
};

const stringData = JSON.stringify(ReqJson);
const URL = 'CHALLENGE_URL';
const sharedSecret = ReqJSON.contact_email + 'SPECIAL_CODE';

const MyTOTP = hotpTotpGenerator.totp({
  key: sharedSecret,
  T0: 0,
  X: 30,
  algorithm: 'sha512',
  digits: 10,
});

const authStringUTF = ReqJSON.contact_email + ':' + MyTOTP;
const bytes = utf8.encode(authStringUTF);
const encoded = base64.encode(bytes);

const createReq = async () => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Basic ' + encoded,
      },
    };

    console.log('Fetching request: ', { URL, ReqJSON, config });

    const response = await axios.post(URL, stringData, config);
    console.log(response.data);
  } catch (err) {
    console.error(err.response.data);
  }
};

createReq();
