'use client';
import moment from 'moment';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { wixClient } from './auth/wix-client';

export default function SubscribeNewsLetter() {
  const inpSubNewsLetter = useRef(null);

  const subscribeNewsLetter = async () => {
    const email = inpSubNewsLetter?.current?.value;
    if (!email) {
      return;
    }

    const date = new Date();
    const formattedDate = moment(date).format('MMM D, YYYY h:mm A');

    const payload = {
      dataCollectionId: 'subscribers03',
      dataItem: {
        data: {
          email: email,
          submissionTime: formattedDate
        }
      }
    };

    try {
      const response = await wixClient.items.insertDataItem(payload);
      toast.success('Sign up successful!');
    } catch (error) {
      toast.error('Sign up failed. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="mb-5 mt-5 text-black underline">STAY UPDATED</h1>
      <div>Sign up for our newsletter</div>
      <input
        ref={inpSubNewsLetter}
        placeholder="Enter Your Email Here*"
        className="mr-2 mt-1 rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2"
      />
      <button
        onClick={subscribeNewsLetter}
        className="rounded-md bg-blue-500 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-blue-500"
      >
        JOIN NOW
      </button>
      <ToastContainer />
    </div>
  );
}
