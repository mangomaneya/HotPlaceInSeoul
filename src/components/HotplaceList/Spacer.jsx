const Spacer = ({ x, y }) => {
  if (x) {
    return <div className={`w-[${x}px]`}></div>;
  }
  if (y) {
    return <div className={`h-[${y}px]`}></div>;
  }
  return null;
};

export default Spacer;
