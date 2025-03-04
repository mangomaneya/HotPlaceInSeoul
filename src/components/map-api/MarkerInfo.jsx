export default function MarkerInfo({ item }) {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.id}</div>
      <div>{item.uniqueId}</div>
      <button>모달</button>
    </div>
  );
}
