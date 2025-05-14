import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL =
  'http://apis.data.go.kr/B551177/StatusOfArrivals/getArrivalsCongestion';
const SERVICE_KEY = 'VyIPvi0KZ9TeQoQBjgLVVFXwsaKhVoJk7RZjOj0cKLSFRxYxJWVpIwBBePSS997krdcEPiHQPg49/AU+gRLAmg==';

export default function App() {
    const [arrivals, setArrivals] = useState([]);
    const [loading,  setLoading ] = useState(true);
    const [error,    setError   ] = useState(null);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(BASE_URL, {
          params: {
            serviceKey: SERVICE_KEY,
            terno: 'T1',
            numOfRows: 100,
            pageNo: 1,
            type: 'json',
          },
        });
  
        console.log('API 응답 전체:', res.data);
  
        const items = res.data?.response?.body?.items ?? [];
  

        setArrivals(Array.isArray(items) ? items : []);
        setError(null);
      } catch (e) {
        console.error('데이터 불러오기 중 에러:', e);
        setError('데이터 불러오기 오류');
        setArrivals([]);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
      const id = setInterval(fetchData, 60 * 1000);
      return () => clearInterval(id);
    }, []);

    const parseNum = s => isNaN(parseFloat(s)) ? 0 : parseFloat(s);
  
    return (
      <div className="app">
        <h1>인천공항 입국장 혼잡도 (실시간)</h1>
  
        {loading && <p>로딩 중…</p>}
        {error   && <p className="error">{error}</p>}
  
        {!loading && !error && (
          <table>
            <thead>
              <tr>
                <th>터미널</th>
                <th>입국장</th>
                <th>내국인</th>
                <th>외국인</th>
                <th>총 대기</th>
              </tr>
            </thead>
            <tbody>
              {arrivals.map((it, idx) => {
                const ko = parseNum(it.korean);
                const fo = parseNum(it.foreigner);
                return (
                  <tr key={idx}>
                    <td>{it.terno}</td>
                    <td>{it.entrygate}</td>
                    <td>{ko.toFixed(0)}</td>
                    <td>{fo.toFixed(0)}</td>
                    <td>{(ko + fo).toFixed(0)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }