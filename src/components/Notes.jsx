import Note from './Note'

const Notes = ({ notes, handleUpdate, handleDelete }) => {

    return (
        <>
            <h6>notes</h6>
            {notes &&
                <ul>
                    {notes.map(note => {
                            return (
                                <Note
                                    key={note.id}
                                    note={note}
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                />
                            )
                        }
                    )}
                </ul>
            }
        </>
    )
}

export default Notes