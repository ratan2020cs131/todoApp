const PauseIcon = ({ height = 1.5, width = 1.5, fill = "#1C274C" }) => {
  return (
    <svg
      height={`${height}rem`}
      width={`${width}rem`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill}>
        <path opacity=".4" d="M11.97 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
        <path d="M10.72 15.03V8.97c0-.48-.2-.67-.71-.67h-1.3c-.51 0-.71.19-.71.67v6.06c0 .48.2.67.71.67H10c.52 0 .72-.19.72-.67ZM16 15.03V8.97c0-.48-.2-.67-.71-.67h-1.3c-.5 0-.7.19-.7.67v6.06c0 .48.2.67.7.67h1.3c.5 0 .7-.19.7-.67Z" />
      </g>
    </svg>
  );
};
export default PauseIcon;
