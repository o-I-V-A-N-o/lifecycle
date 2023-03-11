import { useState, useEffect } from 'react';

function Home() {
  const [notes, setNotes] = useState([]);
  const [noteId, setNoteId] = useState(0);
  const [status, setStatus] = useState();
  const[form, setForm]= useState({
    id: '',
    title: '',
    content: ''
  });

  useEffect(() => {
    updateNote();
  }, []);

  useEffect(() => {
    
    notes.forEach(note => {
      if (note.id == noteId) {
        setStatus('');
        fetch('http://localhost:7777/notes/' + noteId, { method: 'DELETE' })
          .then(() => setStatus('Delete successful'))
          .catch(error => console.error(error));
      }
    });
  }, [noteId]);

  useEffect(() => {
    updateNote();
  }, [status]);

  const updateNote = () => {
    console.log('update')
    fetch('http://localhost:7777/notes')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error(error));
  }

  const addNote = () => {
    console.log('add');
    var newId = 0;
    notes.forEach(note => {
      if (note.id > newId) {
        newId = note.id + 1;
      }
    });
    setForm(prevForm => ({...prevForm, id: newId}));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    };
    fetch('http://localhost:7777/notes?id=' + newId, requestOptions)
      .then(response => updateNote())
      .catch(error => console.error(error));
    setForm({id: '', title: '', content: ''});
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    if (form.id != '' || form.title != '' && form.content !='') {
      addNote();
    }
  }

  const handleTitleChange = evt => {
    
    setForm(prevForm => ({...prevForm, title: evt.target.value}));
  }

  const handleContentChange = evt => {
    
    setForm(prevForm => ({...prevForm, content: evt.target.value}));
  }

  return (
    <div>
      <h1>Note</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" value={form.title} onChange={handleTitleChange} />
        <textarea id="content" name="content" value={form.content} onChange={handleContentChange} >
        </textarea>
        <button type="submit">Add note</button>
      </form>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => setNoteId(note.id)}>Del Note</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
