import React, {Component} from 'react';
import Information from '../Information/Information';

class Informations extends Component {
    render() {
        return this.props.text.map(info => {
            return (
                <Information 
                    name={info.name}
                    founded={info.founded}
                
                />
            )
        })
    }
};

export default Informations;