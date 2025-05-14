import axios from 'axios';

const BASE_URL = 'http://apis.data.go.kr/B551177/StatusOfArrivals';
const SERVICE_KEY = 'VyIPvi0KZ9TeQoQBjgLVVFXwsaKhVoJk7RZjOj0cKLSFRxYxJWVpIwBBePSS997krdcEPiHQPg49/AU+gRLAmg==';

export async function fetchArrivalsCongestion(
    terno = 'T1',
    numOfRows = 100,
    pageNo = 1
  ) {
    const params = {
      serviceKey: SERVICE_KEY,
      terno,
      numOfRows,
      pageNo,
      type: 'json',
    };
  
    const res = await axios.get(`${BASE_URL}/getArrivalsCongestion`, { params });
    // body.items 가 배열로 내려오므로 그대로 반환
    const items = res.data?.response?.body?.items;
    return Array.isArray(items) ? items : [];
  }