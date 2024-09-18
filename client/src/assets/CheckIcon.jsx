const CheckIcon = ({ height = 1.5, width = 1.5, fill = "#1C274C" }) => {
  return (
    <svg
      height={`${height}rem`}
      width={`${width}rem`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c4.71 0 7.07 0 8.54 1.46C22 4.93 22 7.3 22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22Zm4.03-13.03c.3.3.3.77 0 1.06l-5 5c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 4.47-4.47c.3-.3.77-.3 1.06 0Z"
        fill={fill}
      />
    </svg>
  );
};
export default CheckIcon;
