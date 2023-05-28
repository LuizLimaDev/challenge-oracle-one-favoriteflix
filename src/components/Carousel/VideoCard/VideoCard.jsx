
import { dataVideos } from '../../../dataVideos';

export default function VideoCard() {
  return (
    <dv>
      {dataVideos.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <img src={item.poster} alt={item.tile} />
        </div>
      ))}
    </dv>
  )
}