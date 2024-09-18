const DeleteIcon = ({ height = 1.5, width = 1.5, fill = "#1C274C" }) => {
  return (
    <svg
      height={`${height}rem`}
      width={`${width}rem`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.75 20.28 4 8h16l-1.75 12.28A2 2 0 0 1 16.27 22H7.73a2 2 0 0 1-1.98-1.72ZM21 4h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
        fill={fill}
      />
    </svg>
  );
};
export default DeleteIcon;
