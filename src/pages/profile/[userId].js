import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../FirebaseConfig';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/Context';
import Image from 'next/image';
import userPlaceholder from '../../../public/assets/user.png'

export default function Page() {
    const router = useRouter();
    const urlQuery = router.query.userId;
    const { user, setUser } = useContext(UserContext);
    const [userDB, setUserDB] = useState([])

    useEffect(() => {
        const readData = async () => {
            if (urlQuery) {
                const docRef = doc(db, 'users', urlQuery);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDB(docSnap.data());
                } else {
                    console.log('No such document!');
                }
            }
            // console.log();
        };
        readData();
    }, [urlQuery, setUser]);



    return (
        <div>
            <p>User: {router.query.userId}</p>
            <p>First Name: {userDB.firstName}</p>
            <p>E-mail: {userDB.email}</p>
            <p>creation time: {userDB.creationTime}</p>
            <div>
                <p>Skills:</p>
                <ul>
                    {userDB.skills &&
                        userDB.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                </ul>
            </div>
            <Image src={userDB.profilePicture ? userDB.profilePicture : userPlaceholder} width={100} height={100} alt='profile Pic' />
        </div>
    );
}
