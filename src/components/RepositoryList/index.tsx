import React, { Component } from 'react';

interface Repository {
    id: number;
    name: string;
}

interface Props {
    // Ele é um array de objeto, entãopdemos definir outra pra isso
    repositories : Repository[];
}

interface State {
    newRepository?: String;
}


export default class RepositoryList extends Component<Props, State> {
    state = {
        newRepository: '',
    }
    render(){
        // Eu não sei qual o formato dessa variavel, se é um array, objeto.
        const { repositories } = this.props;

        return (
            <h1>Hello World</h1>
        );
    };
}



