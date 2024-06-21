import React, { useState } from 'react';
import './App.css';
import '../core/page-block-renderer';

const initialItems = [
  {
    type: "text",
    value: "hello, world!",
    editable: true
  },
  {
    type: "youtube",
    value: "https://www.youtube.com/embed/1EL6L2dh5pY",
    editable: true
  }
];

function App() {

  const [items, setItems] = useState(initialItems);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('dragIndex', index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData('dragIndex');
    const newItems = [...items];
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WebComponents In React</h1>
      </header>
      {items.map((item, index) => (
        <page-block-renderer
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, index)}
          data={JSON.stringify(item)}>
        </page-block-renderer>
      ))}
    </div>
  );
}

export default App;
