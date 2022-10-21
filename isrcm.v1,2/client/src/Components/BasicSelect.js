import * as React from 'react';
import { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

class BasicSelect extends Component {
  
  constructor(){
    super();
    this.state = {
      nombre: '',
      cursos: [],
      _id: ''
    }
  }

  componentDidMount() {
    this.fetchCurso();
  }


  fetchCurso(){
    fetch('http://localhost:9000/api/curso')
    .then(res => res.json())
    .then(data => {
      this.setState({cursos:data});
      console.log(this.state.cursos)
    })
    
  }

  render() {
    return (
      <div className="BasicSelect">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Seleccione Cursos Disponibls
            </InputLabel>

            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: 'Seleccione Cursos Disponibles',
                id: 'uncontrolled-native',
              }}>
                <option value = {1}>*Seleccione un curso*</option>
              {
              this.state.cursos.map(elemento => 
                {
                  return(<option value = {elemento._id}>{elemento['Nombre Curso']}</option>)
                }
                )}

            </NativeSelect>
          </FormControl>
        </Box>
      </div>
 

    )
  }

}

export default BasicSelect