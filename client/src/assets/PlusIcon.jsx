const PlusIcon = ({ height = 1, width = 1, fill = "#1C274C" }) => {
  return (
    <svg
      height={`${height}rem`}
      width={`${width}rem`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12h16m-8-8v16"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default PlusIcon;
