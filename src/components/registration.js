import React from 'react';

import '../styles/form.css';

class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: '',
            player1Tag: '',
            player2Tag: '',
            player3Tag: '',
            player4Tag: '',
            player5Tag: '',
            coachTag: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            ...this.state,
            [name]: value,
        })
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autocomplete="off">
                <h2>Registration Info</h2>
                <input type="text" placeholder="Team Name" name="teamName" value={this.state.teamName} onChange={this.handleChange} required/>
                <input type="text" placeholder="Player 1 Game Tag" name="player1Tag" value={this.state.player1Tag} onChange={this.handleChange} required/>
                <input type="text" placeholder="Player 2 Game Tag" name="player2Tag" value={this.state.player2Tag} onChange={this.handleChange} required/>
                <input type="text" placeholder="Player 3 Game Tag" name="player3Tag" value={this.state.player3Tag} onChange={this.handleChange} required/>
                <input type="text" placeholder="Player 4 Game Tag" name="player4Tag" value={this.state.player4Tag} onChange={this.handleChange} required/>
                <input type="text" placeholder="Player 5 Game Tag" name="player5Tag" value={this.state.player5Tag} onChange={this.handleChange} required/>
                <input type="text" className="optional" placeholder="Coach Game Tag (Optional)" name="coachTag" value={this.state.coachTag} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Registration;