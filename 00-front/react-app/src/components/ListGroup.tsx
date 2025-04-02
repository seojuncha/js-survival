import { MouseEvent, useState } from "react";

// { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//function ListGroup(props: Props)
function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = -1;
  // instead of ablove,
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>My List</h1>
  //       <p>No items found</p>
  //     </>
  //   );
  // }
  // Other representation to render conditionally.
  const getMessage = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    // React cannot return more then one element!
    // {} means evaluating javascript code!
    // <div> or <Fragment>
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(event) => {
            //   console.log(item, index, event);
            // }}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
