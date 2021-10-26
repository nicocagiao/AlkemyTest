import React, {Component} from 'react';
import axios from 'axios'

export default class APIComponent extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
        this.getApidata();  
    }

    getApidata() {
      axios.get('http://localhost:3000/api/balance').then(response => {
           this.setState({
            isLoaded: true,
            items: response.data.data})
       });
   }

   render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.concepto} {item.valor}
              </li>
            ))}
          </ul>
        );
      }
    }
  }