import { useParams } from 'react-router-dom';
import { computeRankings } from '../firebase/firebase-db';
import { useState, useEffect } from 'react';
import '../styles/TemplatePage.css';
import UKGLogo from '../components/UKGLogo';
import '../styles/Rankings.css';
import { Link } from 'react-router-dom'

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
        <div className='main-container-ranking'>
          <div className='title-ranking'>Meet the Krew</div>
          {rankings.map((user) => {
            if (user.score > 0) {
              return (
                <div className='user-container-ranking' key={user.userEmail}>
                  <div className='score-ranking'>{user.score}</div>
                  <div className='text-content-ranking'>
                    <div className='top-text'>
                      {user.userName}, {user.jobTitle}, <span style={{ color: '#006d6b' }}>{user.contactPlatform}:{' '}</span>
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
            }
          })}
        </div>
        <Link to='/'>
          <div className='logo'>
            <UKGLogo />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Rankings;
