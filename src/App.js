import React, {useState,useEffect} from 'react';
import './App.css';
import People from './component/People';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    offset:200,
    duration:800
  });
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <div>
      <People/>   
    </div>
  );
}

export default App;
