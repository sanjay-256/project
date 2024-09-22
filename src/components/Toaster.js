import React, { useEffect, useState } from 'react';

const Toaster = ({ status,content }) => {
  const [toast, setToast] = useState(false);
  const[visible,setVisible]=useState(true);
  useEffect(() => {
    setToast(true);
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    setTimeout(()=>{
      setVisible(false);
    },3500);
    return () => clearTimeout(timer);
  }, []);

  return (
   visible && (
      <div className={`absolute -right-10 top-6 transition-transform duration-500 ease-in-out ${toast ? '-translate-x-16' : 'translate-x-full'}`}>
        <div className={`border-2 ${status === 'success' ? 'border-green-500' : 'border-red-500'} rounded p-1.5 px-0 inline`}>
          <p className={`inline border-2 border-white rounded ${status === 'success' ? 'bg-green-500' : 'bg-red-500'} p-1 font-medium text-white`}>
            {content}
          </p>
        </div>
    </div>)
  );
};

export default Toaster;
