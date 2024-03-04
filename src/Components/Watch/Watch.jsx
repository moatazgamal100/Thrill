import React from 'react'
import { useParams } from 'react-router-dom'

export default function Watch() {
    let {src } = useParams();
    console.log(src);
    return <>
        <div className="film mt-2">
        <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/`+src}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
      ></iframe>
        </div>
    </>
}
