import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { Component } from 'react';

class Checkboxes extends Component {
  
  
  constructor(){
    super();
    this.state = {
      nombre: '',
      empleados: [],
      _id: ''
    }
  }

  componentDidMount() {
    this.fetchEmpleados();
  }


  fetchEmpleados(){
    fetch('http://localhost:9000/api/empleado')
    .then(res => res.json())
    .then(data => {
      this.setState({empleados:data});
      console.log(this.state.empleados)
    })
    
  }


  render() {
    return (
    <div className='Checkboxes'>
      <Form>
        {
        this.state.empleados.map((type) => (
          
            <div key={type} className="mb-3">

            <Form.Check type='checkbox' id={`check-api-checkbox`}>
              <Form.Check.Input type='checkbox' isValid />
              <Form.Check.Label>{`Custom api checkbox`}</Form.Check.Label>
              <Form.Control.Feedback type="valid">
                You did it!
              </Form.Control.Feedback>
            </Form.Check>
            </div>
            
      
        )
        )
        }
      <Button variant="outlined">Primary</Button> </Form>
      
      
      
    </div>
  );}
}

export default Checkboxes;

