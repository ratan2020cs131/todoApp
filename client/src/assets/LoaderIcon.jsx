const LoaderIcon = ({ height = 6, width = 6, fill = "#1C274C" }) => {
  return (
    <svg
      height={`${height}rem`}
      width={`${width}rem`}
      className="animate-loading"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3v3m0 12v3m-6-9H3m18 0h-3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.73-2.12 2.13m-8.48 8.48-2.13 2.13"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default LoaderIcon;
