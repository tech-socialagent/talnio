import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../FirebaseConfig';
import { useContext, useEffect } from 'react';
import { UserContext } from '@/Context';
import Image from 'next/image';

export default function Page() {
    const router = useRouter();
    const urlQuery = router.query.userId;
    const { user, setUser } = useContext(UserContext);

    const readData = async () => {
        if (urlQuery) {
            const docRef = doc(db, 'users', urlQuery);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUser(docSnap.data()); 
            } else {
                console.log('No such document!');
            }
        }
    };
    readData();


    return (
        <div>
            <p>User: {router.query.userId}</p>
            <p>First Name: {user.firstName}</p>
            <p>E-mail: {user.email}</p>
            <p>creation time: {user.creationTime}</p>
            <Image src={user.profilePicture} width={100} height={100} alt='profile Pic' />
        </div>
    );
}
