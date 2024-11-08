import axios from 'axios';

const commonAPI = async (httpRequest, url, reqBody, reqHeader) => {
  const reqConfig = {
    method:httpRequest,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-type": "application/json" }
  };

  try {
    const res = await axios(reqConfig);
    return res;
  } catch (err) {
    return err;
  }
};

export default commonAPI;