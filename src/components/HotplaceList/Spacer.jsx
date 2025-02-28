export const Spacer = ({ x, y }) => {
  if (x) {
    return <div style={{ width: `${x}px` }} />;
  }
  if (y) {
    return <div style={{ height: `${y}px` }} />;
  }
  return null;
};
