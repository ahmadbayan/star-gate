import forest from "../assets/img/forest.jpeg";
import fabrica from "../assets/img/fag1.jpg";
import wood from "../assets/img/wood.jpg";
import case3 from "../assets/img/case3.jpeg";
import fag4 from "../assets/img/fag4.jpeg";
import pellets from "../assets/img/pellets-hall.jpeg";
import videoPoster from "../assets/img/video-poster.jpg";
// import pelletsBag from "../assets/img/sac-peleti.jpg";
import { Slide } from "../interfaces/interfaces";
import video from "../assets/videos/video.mp4";

export const slides: Slide[] = [
  { url: video, isVideo: true, poster: videoPoster },
  { url: pellets, isVideo: false },
  { url: fabrica, isVideo: false },
  { url: case3, isVideo: false },
  { url: fag4, isVideo: false },
  { url: wood, isVideo: false },
  { url: forest, isVideo: false },
  // { url: pelletsBag, isVideo: false },
];
