// client/src/pages/home/index.js
import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate();
  
    const joinRoom = () => {
        if (room !== ''  && username !== '') {
            socket.emit('join_room', { username, room })
        }

        navigate('/chat', { replace: true});
    }

    return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>RecoveryRooms</>`}</h1>
        <input 
            className={styles.input} 
            placeholder='Username...' 
            onChange={(e) => setUsername(e.target.value)}
        />

        <select 
            className={styles.input}
            onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value='Alcoholics Anonymous'>Alcaholics Anonymous</option>
          <option value='Narcotics Anonymous'>Narcotics Anonymous</option>
          <option value='Cocaine Anonymouse'>Cocaine Anonymous</option>
          <option value='Heroin Anonymous'>Heroin Anonymous</option>
        </select>

        <button 
            className='btn btn-secondary' 
            style={{ width: '100%' }}
            onClick={joinRoom}
        >
            Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;