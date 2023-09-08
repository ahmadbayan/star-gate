export default function InstagramSolidSvg({ classes, fill, fillSecond }: any) {
  return (
    <svg
      className={classes ? classes : ""}
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
        d="m113.41,100c0,7.39-6.02,13.41-13.41,13.41s-13.41-6.02-13.41-13.41,6.02-13.41,13.41-13.41,13.41,6.01,13.41,13.41m6.69,0c0-11.08-9.02-20.1-20.1-20.1s-20.1,9.02-20.1,20.1,9.02,20.1,20.1,20.1,20.1-9.02,20.1-20.1m5.18-21c0-2.56-2.07-4.62-4.62-4.62s-4.62,2.07-4.62,4.62,2.07,4.62,4.62,4.62,4.62-2.07,4.62-4.62m7.14,39.7c0,7.57-6.16,13.73-13.73,13.73h-37.39c-7.57,0-13.73-6.16-13.73-13.73v-37.39c0-7.57,6.16-13.73,13.73-13.73h37.39c7.57,0,13.73,6.16,13.73,13.73v37.39Zm6.69,0v-37.39c0-11.26-9.16-20.42-20.42-20.42h-37.39c-11.26,0-20.42,9.16-20.42,20.42v37.39c0,11.26,9.16,20.42,20.42,20.42h37.39c11.26,0,20.42-9.16,20.42-20.42"
      />
    </svg>
  );
}
