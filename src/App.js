import React, { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';
import CaptionEditor from './Components/CaptionEditor';
import './App.css'
function App() {
  const [captions, setCaptions] = useState({});
  const [url, setUrl] = useState('');
  const [videoUrl, setVideo] = useState('');
  const handleAddCaption = (timestamp, caption) => {
    const updatedCaptions = {...captions};
    updatedCaptions[timestamp] = caption;
    setCaptions(updatedCaptions);
  };
  const [videDetails,setDetails] = useState({});
  return (
    <div className="App">
      <div>
        <h1>Video Caption Editor</h1>
      </div>
      <div className='url-form'>
        <label>
          Enter URL: <input type='text' onChange={(e)=>setUrl(e.target.value)} required/>
        </label>
        <button onClick={()=>setVideo(url)}>Add video</button>
      </div>
      {videoUrl?
        <>
          <VideoPlayer videoUrl={videoUrl} captions={captions} handleDetails={setDetails}/>
          <CaptionEditor onAddCaption={handleAddCaption} limit={videDetails.duration}/>
          <div className="captions">
            <div>Added Captions</div>
            <ul>
              {Object.keys(captions).map((timestamp, index) => (
                <li key={index} className="caption">
                  {timestamp}s: {captions[timestamp]}
                </li>
              ))}
            </ul>
            
          </div>
        </>:<></>
      }
    </div>
  );
}

export default App;
