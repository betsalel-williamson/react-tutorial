// import Message from "./components/Message";
import Button from "./components/Button";
import { ButtonTypes } from "./components/ButtonTypes";
import ListGroup, { MyListItem } from "./components/ListGroup";

/**
 *
 * @returns Simple page
 */
function App() {
  const myItems: MyListItem[] = [
    { id: 1, content: "one" },
    { id: 2, content: "two" },
    { id: 3, content: "three" },
    { id: 4, content: "four" },
    { id: 5, content: "five" },
  ];

  return (
    <div>
      <ListGroup
        items={myItems}
        heading={"My new list"}
        onSelectedItem={function (item: MyListItem): void {
          console.log(item);
        }}
      />
      <Button type={ButtonTypes.secondary} />
    </div>
  );
}

export default App;
