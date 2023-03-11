import { Route } from 'react-router-dom';

function Notes() {
  const notes = [
    { id: 1, title: 'Note 1', content: 'This is the content of note 1.' },
    { id: 2, title: 'Note 2', content: 'This is the content of note 2.' },
    { id: 3, title: 'Note 3', content: 'This is the content of note 3.' }
  ];

  return (
    JSON.stringify(notes, null, 2)
  );
}

export default Notes;
