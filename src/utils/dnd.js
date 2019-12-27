// fake data generator
export const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
    showAnswers: false,
    text: "WHADUUUP?! WHOSE yo dadyyyY?!?!?! hmmmmmmm?",
    points: 500,
    seconds: 30,
    answers: [
      {
        id: (k + offset) * 4,
        text: "you",
        editingAnswer: false,
        isCorrect: false
      },
      {
        id: (k + offset) * 4 + 1,
        text: "idk, y ask",
        editingAnswer: false,
        isCorrect: false
      },
      {
        id: (k + offset) * 4 + 2,
        text: "heil hitler",
        editingAnswer: false,
        isCorrect: true
      },
      {
        id: (k + offset) * 4 + 3,
        text: "another random answer",
        editingAnswer: false,
        isCorrect: false
      }
    ],
    editingQuestion: false
  }));

// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
export const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

export const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

export const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid
});
