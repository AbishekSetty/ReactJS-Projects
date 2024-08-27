export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items in your Packing list🚀</em>
      </footer>
    );

  const numberItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numberItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything!! Ready to go✈️</em>
      ) : (
        <em>
          You have {numberItems} items on your list , {numPacked} items is
          packed ({percentage}%){" "}
        </em>
      )}
    </footer>
  );
}
