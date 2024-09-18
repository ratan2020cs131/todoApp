const PlayIcon = ({ height = 1, width = 1, fill = "#1C274C" }) => {
  return (
    <svg
      height={`${height}rem`}
      width={`${width}rem`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4 9.35a3 3 0 0 1 0 5.3L8.6 21.6C6.53 22.74 4 21.28 4 18.97V5.03c0-2.3 2.53-3.77 4.6-2.64l12.8 6.96Z"
        fill={fill}
      />
    </svg>
  );
};
export default PlayIcon;
