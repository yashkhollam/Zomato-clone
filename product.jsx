import React,{Component} from "react";

//'React': is a default import.Default imports are exported with 'export default <classname>' .There is only one default export.
//  {} :is used for a named import. Member imports that are exported with 'export <function/props/class>'.
//        There can be multiple member exports
import { JSON } from "./json.json";                      //ref to the json.json data file
import ProductList from './src/ProductList';

class product extends Component{
    constructor(){
        super();
        this.state={                                    //state
            title:'Product Page',                        //props
            product:JSON                                //asign the json.json file to the n prop
        }
    }


    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <ProductList prodlist={this.state.product}/>  {/* pass data from .json file to ProductList component prop*/ }
            </div>
        )
    }
}

export default product;