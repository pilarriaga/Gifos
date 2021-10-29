//style
import './Gif.css';

function Gif ({
  src
}) {
  return  (
  <a href= {src} target='_blank' rel="noopener noreferrer">
    <img className='gif-img' src= {src} alt= 'imagen-de-gif'/>
  </a>
)
}

export default Gif;