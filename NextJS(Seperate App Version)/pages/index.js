import Head from 'next/head';
import Header from '../components/header';
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { getSession, useSession } from "next-auth/client";
import Login from '../components/Login';
import Modal from "@material-ui/core/Modal";
import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import firebase from 'firebase';
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import DocumentRow from "../components/DocumentRow";

export default function Home() {
  const [session] = useSession();
  const [showModal, setShowModal] = useState(false);
  const [docs, setDocs] = useState([]);
  const docNameFieldRef = useRef(null);

  // const [snapshot] = useCollectionOnce(db.collection('userDocs').doc
  // (session.user.email).collection('docs').orderBy('timestamp', 'desc'));

 

  if(!session) return <Login />

  else
 useEffect(() => {
    const unsub = docsRef
    .orderBy('timestamp', 'desc')
    .onSnapshot(querySnapshot => setDocs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))))

    return unsub
  }, [])



  const docsRef = db.collection('userDocs').doc(session?.user.email).collection('docs');

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = docNameFieldRef.current.value;

    if (inputValue) {

      docsRef.add({
        fileName: inputValue,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setShowModal(false);
        e.target.reset();
      })
      .catch(err => alert(err))

    }
  }

  const ModalComponent = () => (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="grid place-items-center px-2"
    >
      <div className="flex justify-center flex-col w-full h-3/6 sm:w-3/6 sm:h-48 bg-gray-100 rounded-xl outline-none px-4">
        <p className="mb-4">Create document</p>
        <form onSubmit={handleSubmit}>
          <input ref={docNameFieldRef} type="text" placeholder="Provide doc name" className="rounded-md p-2 mb-3 w-full outline-none" />
          <div className="flex space-x-3 justify-center">
            <Button onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Create
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );


  

  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ModalComponent />

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between py-6">
              <h2 className="text-gray-700 text-lg">Start a new document</h2>

              <Button
                color="gray"
                buttonType="outline"
                iconOnly={true}
                ripple="dark"
                className="border-0"
                >
                  <Icon name="more_vert" size="3xl" />
                </Button>
            </div>
            <div onClick={() => setShowModal(true)}className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <Image src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png'
              layout="fill" />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>


        </div>
      </section>

    <section className="bg-white px-10 md:px-0">
      <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
        <div className="flex items-center justify-between pb-5">
          <h2 className="font-medium flex-grow">My Documents</h2>
          <p className="mr-12">Date Created</p>
        <Icon name="folder" size="3xl" color="gray" />
        </div>

        {docs?.map(doc => (
            <DocumentRow
            key={doc.id}
            doc={doc}
            />
          ))}

      </div>

    </section>
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}