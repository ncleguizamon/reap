import * as  React from 'react';
import {  Card } from 'semantic-ui-react'
export interface IData {  
    datos: Datajson[];
  }
  
  export interface Datajson {  
    brand: string;
    data: number,
    date: string,

  }
 
  
export  class List extends React.Component<IData> {
  
    constructor(props: IData){
        super(props);
      }

     componentDidMount(){
        //console.log(this.props.datos);
      }
      setdata(){
        return (
          
          this.props.datos.map( (row, index  )=> {
            return ( 
              <Card
              key={index}
              color='blue'
            //  href='#'
              header={'Marca: '+row.brand}
              meta={'Valor: '+row.data}
              description={'Fecha: '+ row.date}
             // image={src}
            />
            );  
          }))
      } 

    public render() {

        return ( 
          <Card.Group itemsPerRow={4}>
          { this.setdata()}
          </Card.Group>
        )
    }
   

}
