import React, { useState } from 'react'
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth , db, storage } from '../firebase';
import { Link } from 'react-router-dom'
import {  ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage';
import './Register.scss'
import img from '../Assets/img/img chats.png'
import {doc , setDoc} from 'firebase/firestore'

const Register = () => {

  const [err , setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {

      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage , displayName ) ;

      const uploadTask = uploadBytesResumable (storageRef , file );

      uploadTask.on(

        (error) => {
          setErr(true)
        } , () => {
        getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
          console.log("file downloaded" , downloadURL);
          await updateProfile(res.user , {
            displayName ,
            photoURL : downloadURL ,
          });

          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
        })
        }
      );

      

    } catch (err) {
      setErr(true)
    }

  }
  return (
    <div className="fromContainer">
        <div className="fromWrapper">
            <span className="logo">Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" id="text"  placeholder='Name' />
                <input type="email" name="email" id="email" placeholder='email' />
                <input type="password" name="password" id="password" placeholder='password' />
                <input style={{display:"none"}} type="file" name="" id="file"  />
                <label htmlFor="file">
                    <img src={img} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sing up</button>
                {
                  err && <span>err</span>
                }
            </form>
            <p>You Register accept  <Link className='link'  to={'login'}  >Login</Link> </p>
        </div>
    </div>
  )
}

export default Register