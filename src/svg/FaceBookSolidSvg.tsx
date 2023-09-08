export default function FaceBookSolidSvg({ classes, fill, fillSecond }: any) {
  return (
    <svg
      className={classes}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <path
        strokeWidth={0}
        className={fill}
        d="m100,186.12c-47.49,0-86.12-38.63-86.12-86.12S52.51,13.88,100,13.88s86.12,38.64,86.12,86.12-38.63,86.12-86.12,86.12"
      />
      <path
        className={fillSecond}
        d="m122.2,73.32v-14.55h-12.86c-10.2,0-18.47,8.27-18.47,18.47v13.31h-13.07v15.19h13.07v35.5h15.96v-35.73h11.95l2.28-15.08h-14.23v-10.73c0-3.52,2.85-6.37,6.37-6.37h9Z"
      />
    </svg>
  );
}
