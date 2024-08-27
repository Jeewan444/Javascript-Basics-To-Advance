// simple note-taking app using DOM manipulation:

// Get references to the input field, add button, and notes container
const noteInput = document.querySelector('#noteInput');
const addNoteBtn = document.querySelector('#addNoteButton');
const notesContainer = document.querySelector('#notesContainer');

// Function to create a new note
function createNote() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        const noteContent = document.createElement('p');
        noteContent.textContent = noteText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', () => {
            notesContainer.removeChild(noteDiv);
        });

        noteDiv.appendChild(noteContent);
        noteDiv.appendChild(deleteBtn);
        notesContainer.appendChild(noteDiv);

        noteInput.value = ''; // Clear the input field
    }
}

// Event listener for the add note button
addNoteBtn.addEventListener('click', createNote);

// Optional: Add functionality to create a note when pressing Enter key
noteInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createNote();
    }
});
