import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../utils/firebase.config";

const UserProfile = () => {
  const dataref = collection(database, "UserInfo");
  const [userdetails, setuserdetails] = useState([]);

  const fetchdata = async () => {
    const result = await getDocs(dataref);
    console.log(result);
    setuserdetails(
      result.docs?.map((e, key) => ({ ...e.data, key: e.key, id: e.id }))
    );
    console.log(userdetails);
  };

  useEffect(() => {
    fetchdata()
  }, []);

  return (
    <>
      <div className="w-auto rounded bg-slate-600 p-5 max-sm:p-2 mb-10 mt-10 ml-5 mr-5 flex flex-wrap max-sm:flex-col items-center justify-center">
        <h1 className="text-5xl max-sm:text-2xl font-bold pb-3 pr-8">User Details</h1>
        <img
          className="rounded-full w-56 h-56"
          src={`${userdetails.Picture}`}
          alt="User Profile"
        />
        <ul className="flex justify-between flex-col max-sm:justify-center w-full text-xl font-bold pt-5">
          <div>
            <li className="flex justify-between">
              <span className="text-red-600">Name</span>
              <span>{`${userdetails.Name}`}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-600">Email</span>{" "}
              <span>{`${userdetails.Email}`}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-600">Address</span>{" "}
              <span>{`${userdetails.Address}`}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-600">City</span>{" "}
              <span>{`${userdetails.City}`}</span>
            </li>
          </div>
          <div>
            <li className="flex justify-between">
              <span className="text-red-600">Country</span>{" "}
              <span>{`${userdetails.Country}`}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-600">Plan</span>{" "}
              <span>{`${userdetails.Plan}`}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-600">Status</span>{" "}
              <span>{`${userdetails.Status}`}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-600">Subscription Period </span>
              <span>{`${userdetails.Subscription_period}`}</span>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default UserProfile;
