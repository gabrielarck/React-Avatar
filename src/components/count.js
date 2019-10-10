import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         count: 0
        };
      }
    increment = () => {
      const count = this.state.count;
      this.setState({ count: count + 1 });
    }
    decrement = () => {
        const count = this.state.count;
        this.setState({ count: count - 1 });
      }

    render() {
      const count = this.state.count;
     
      return (
        <div>
            <button 
                onClick= {this.increment}>               
            </button>
                <div>
                    {count}
                </div>           
                    <button 
                        onClick={this.decrement}>                
                    </button>
        </div>
      );
    }
   }
   














export default Count;