import React from 'react';

// Import components
import Form from './Form';
import Notes from './Notes';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    getNoteData = (data) => {
        let newNote = data;
        this.setState({
            notes: [newNote, ...this.state.notes]
        })
        console.log(this.state.notes);

    }
    
    render() {
        return (
            <main className='board container'>
                <h1 className='board__title title title--lg'>
                    Notes board
                </h1>
                <Form noteData={this.getNoteData}/>
                <Notes notes={this.state.notes}/>
            </main>
        );
    }
  
}

export default Board;
