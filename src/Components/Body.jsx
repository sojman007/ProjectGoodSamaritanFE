import React from 'react';
import FoundItem from './FoundItem.jsx'
import LostItem from './LostItem.jsx'
class Body extends React.Component {
   state ={
    items:[] ,
    foundItemClicked: false
    
}

    componentDidMount(){
        this.setState({foundItemClicked:false});
        console.log("blah blah blah logging");
    }

    handleShowLost =(e)=>{
        this.setState({foundItemClicked:false})

        console.log("Lost Item clicked ", e);
    
    }

    handleShowFound =() => {
        this.setState({foundItemClicked:true})

        //
    }
    
    render(){
    
        return ( 
        <div className ="body-container p-5">
            <div className="row">
             
             <button className="btn btn-primary col mr-1" onClick={this.handleShowLost}> 
                    Lost Items
                </button>
                <button className="btn btn-primary col ml-1" onClick ={this.handleShowFound}> 
                    Found Items
                </button>
                
            </div> 
            
            <div className="card mt-2 ml-2 mr-2" > 
                <div className = "card-body">

                    {
                     this.state.foundItemClicked ? 
                    
                         <FoundItem/> 

                        :
                         <LostItem/>
                
                }
                </div>
                
            </div>
        
        
        </div>
      );
}

}
 
export default Body;
