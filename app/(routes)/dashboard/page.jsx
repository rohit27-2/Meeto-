"use client"
import React, { useEffect, useState } from 'react'
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from '@/config/FirebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';


function Dashboard() {
  const db = getFirestore(app);
  const {user} = useKindeBrowserClient();
  const router = useRouter();

  const [loading, setloading] = useState(true);

  useEffect(() => {
    user&&isBusinessRegistered();
  },[user])

  const isBusinessRegistered = async()=> {

    const docRef = doc(db, "Business", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setloading(false)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setloading(false)
      router.replace('/create-business');
    }

  }
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div>
        <h2>Dashboad</h2>
    </div>
  )
}

export default Dashboard