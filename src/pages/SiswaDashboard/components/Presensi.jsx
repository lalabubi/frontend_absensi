import React, { useState, useEffect } from 'react';
import client from '../../../routes/Client';

export default function Presensi() {
  const [currentTime, setCurrentTime] = useState('00:00');
  const [status, setStatus] = useState(localStorage.getItem('absenStatus') || '');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);

      // Reset localStorage absenStatus at 6:00 AM
      if (hours === '06' && minutes === '00') {
        localStorage.removeItem('absenStatus');
        setStatus(''); // Reset status state
        console.log('Local storage reset at 6:00 AM');
      }
    };

    // Update time immediately when component is mounted
    updateTime();

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handlePresensi = (e) => {
    e.preventDefault();

    client.post('presensi')
      .then(({ data }) => {
        console.log(data.message);
        const message = data.message;
        if (message === 'Berhasil Absen Datang') {
          localStorage.setItem('absenStatus', 'datang');
          setStatus('datang');
          alert('Berhasil Absen Datang');
        } else if (message === 'Berhasil Absen Pulang') {
          localStorage.setItem('absenStatus', 'pulang');
          setStatus('pulang');
          alert('Berhasil Absen Pulang');
        }
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || 'Gagal melakukan presensi';
        alert(errorMessage);
      });
  };

  return (
    <div className='container-presensi gap-4 flex justify-center items-center flex-col'>
      <div className='w-[350px] h-[100px] bg-[#afafafb5] flex justify-center items-center rounded-xl shadow-lg'>
        <h1 className='text-7xl font-bold font-mono text-white'>{currentTime}</h1>
      </div>
      <p className='text-gray-500'>Absen sekarang!</p>
      <div>
        <button
          className={`text-white p-2 rounded-lg mt-2 w-[200px] h-[60px] ${
            status === 'pulang' ? 'bg-red-500 hover:bg-red-600' : 'bg-[#ca96ff] hover:bg-[#b163ff]'
          }`}
          onClick={handlePresensi}
        >
          {status === 'datang' ? 'Pulang' : 'Datang'}
        </button>
      </div>
    </div>
  );
}
