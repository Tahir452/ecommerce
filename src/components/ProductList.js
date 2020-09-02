import React,{useEffect} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import ProductCard from './ProductCard';
import { Grid, Image } from 'semantic-ui-react'

import {useSelector,useDispatch} from "react-redux";
import {getProducts} from "../actions"

export default function ProductList() {
const data=useSelector(state=>state.productReducer);

const dispatch = useDispatch();


useEffect(() => {


  //dispatch the action

  dispatch(getProducts({name:"Tahir"})); //it sends an action to reducer 



 
}, [])



console.log("Get Products",data);


    return (
        <Grid  relaxed columns={4} style={{padding:"3em"}}>
      
    

        <Grid.Row columns={4}>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
    
      
      </Grid>
    )
}
