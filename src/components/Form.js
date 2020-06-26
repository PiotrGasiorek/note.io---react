import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteDate: null,
            noteTime: null
        };
        this.sendNoteDetails = this.sendNoteDetails.bind(this);
        this.addZero = this.addZero.bind(this);
    }

    sendNoteDetails = () => {
        const currentDate = new Date();
        this.setState({
            noteDate: `${this.addZero(currentDate.getDate())}.${this.addZero(currentDate.getMonth() + 1)}.${currentDate.getFullYear()}`,
            noteTime: `${this.addZero(currentDate.getHours())}:${this.addZero(currentDate.getMinutes())}`,
        });
        setTimeout(
            () => {
                this.props.noteData(this.state);
            },0
        );
        setTimeout(
            () => {
                this.setState({
                    noteTitle: '',
                    noteDate: '',
                    noteTime: '',
                });
            },0
        );
    }

    addZero = (num) => {
        return num < 10 ? '0' + num : num;
    }
  
    isValid = (e)  => {
        e.preventDefault();
        this.state.noteTitle === '' ? alert('Input is empty') : this.sendNoteDetails();
    };

    updateNoteTitle = (e) =>  {
        this.setState({
            noteTitle: e.target.value
        })
    };
    
    render(){
        return (
            <form action="" className="form">
                <input 
                    onChange={this.updateNoteTitle}
                    type="text" 
                    className="form__input" 
                    placeholder='Type here...'
                    value={this.state.noteTitle}
                />
                <button 
                    onClick={this.isValid}
                    className="form__submit btn">
                </button>
            </form>
        );
    }
}

export default Form;
