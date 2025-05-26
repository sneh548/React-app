import React from 'react'

const MusicPlayer = () => {
  return (
    <div
      style={{
        width: '300px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3>Simple Music Player</h3>
      <audio controls style={{ width: '100%' }}>
        <source src='/music.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default MusicPlayer
