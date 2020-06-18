import React from 'react';

interface State {
    value: string;
}

export class UppercaseContainer extends React.Component<{}, State> {
    public constructor() {
        super({});
        this.state = {
            value: 'initial'
        }

        this.handleUppercase = this.handleUppercase.bind(this);
    }

    handleUppercaseFunctional = () => {
        this.setState({value: this.state.value.toUpperCase()})
    }

    private handleUppercase() {
        this.setState({value: this.state.value.toUpperCase()})
    }

    public render() {
        return (
            <>
                {this.state.value}
                <button onClick={this.handleUppercaseFunctional}>Uppercase</button>
            </>
        );
    }
}