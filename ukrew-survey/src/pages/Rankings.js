import { useParams } from 'react-router-dom';
import { computeRankings } from '../firebase/firebase-db';
import { useState, useEffect } from 'react';
import '../styles/TemplatePage.css';
import UKGLogo from '../components/UKGLogo';
import '../styles/Rankings.css';

const Rankings = () => {
  const { email } = useParams();
  const [rankings, setRankings] = useState([]);

  const findRankings = async () => {
    const rankRes = await computeRankings(email);
    setRankings([...rankRes]);
  };

  useEffect(() => {
    findRankings();
  }, []);

  return (
    <>
      <div className='background'>
        <div className='main-container'>
          <div className='title'>Meet the Krew</div>
          {rankings.map((user) => {
            return (
              <div className='user-container' key={user.userEmail}>
                <div className='score'>{user.score}</div>
                <div className='text-content'>
                  <div className='top-text'>
                    {user.userName}, {user.jobTitle}, {user.contactPlatform}:{' '}
                    {user.contactAddress}
                  </div>
                  <div className='bottom-text'>
                    <span style={{ color: '#006d6b' }}>
                      Things in Common:&nbsp;
                    </span>

                    {user.sameUniversity && <span>{user.university}, </span>}
                    {user.samePets.map((pet) => {
                      return <span key={pet}>{pet}, </span>;
                    })}
                    {user.sameInterests.map((interest) => {
                      return <span key={interest}>{interest}, </span>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='logo'>
          <UKGLogo />
        </div>
      </div>
    </>
  );
};

export default Rankings;
