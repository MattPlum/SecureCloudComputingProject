import TextEditor from "../../components/TextEditor";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import router, { useRouter } from 'next/router'
import { db } from '../../firebase';
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import Login from "../../components/Login";
import { getSession, useSession, signOut } from "next-auth/client";
import { useEffect, useState, useRef } from 'react';

function Doc() {
    const [session] = useSession();
    const router = useRouter();
    const { id } = router.query;
    const [doc, setDoc] = useState(null);
    
    useEffect(() => {
        if (!session) return;
        
        db
          .collection('userDocs')
          .doc(session?.user.email)
          .collection('docs')
          .doc(id)
          .get()
          .then(data => {
            if (data.data()) {
              setDoc({ ...data.data() })
            } else {
              router.replace('/')
            }
          })
          .catch(err => aler(err))
    
      }, [id, session]);




    return(
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">
                <Icon name="description" size="5xl" color="blue" />
                </span>

                <div className="flex-grow px-2">
                    <h2 className="text-gray-600">{doc?.fileName}</h2>
                    <div className="flex items-center text-sm space-x-2 -ml-1 h-8 text-gray-600">
                        <p className="option">File</p>
                        <p className="option">Edit</p>
                        <p className="option">View</p>
                        <p className="option">Insert</p>
                        <p className="option">Format</p>
                        <p className="option">Tools</p>
                    </div>
                </div>

                <Button
                color="lightBlue"
                buttonType="filled"
                size="regular"
                className="hidden md:inline-flex h-10"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                >
                    <Icon name="people" size="md" /> SHARE
                </Button>

                <img className="cursor-pointer rounded-full h-10 w-10 ml-2" src={session?.user.image} alt=""/>
            </header>

            {doc && <TextEditor doc={doc} />}
        </div>
    );
}
export default Doc;

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    return {
      props: {session}
    }
  }