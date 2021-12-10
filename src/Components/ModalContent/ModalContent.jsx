import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './ModalContent.css'


const ModalContent = ({id, media_type}) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
        autoplay: 1,
        },
      };

      let [video, setVideo] = useState();

      useEffect(() => {
          fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=b18527e785a2aad40a1989aa9e7b7495&language=en-US`)
          .then(res => res.json())
          .then(res => {
          console.log(res)
          setVideo(res.results[0].key)})
      }, [])
    

    return (
        <div className='video'>
            {console.log(id, media_type)}
            <YouTube videoId={video} opts={opts}  />
        </div>
    )
    
}

export default ModalContent