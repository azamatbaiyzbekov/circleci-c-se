import React, {Component} from 'react';

class Information extends Component {
    render() {
        console.log('[Information.js] rendering...')
        return (
            <div className='Information'>
                <p>
                    My name is {this.props.name} and I was founded in {this.props.founded}
                </p>
            
            
            </div>
        )
    }
};

export default Information;