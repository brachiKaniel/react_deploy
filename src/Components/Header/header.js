import react from 'react';
import './header.css'

export default function Header() {
    
   
    return (
        <>
  

  <div className="container ">
  <div className="row  header2">
    
  </div>

  <div className="row header1">
    <div className="col-3">
    <div className="btn-group">
                   
                   <div  className="dropBtn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Projects
                   </div>

                   <div className="   dropContainer dropdown-menu dropdown-menu-right container ">
                   
                     <div  className="row">
                     <div className="col">
                        
                     </div>
                     <div className="col itemCircle">
                         d
                     </div>
                         <div className="col-8">
                     <button className=" dropdown-item dropItem " type="button">Action1</button>
                     </div>
                     
                     </div> 
                     <div  className="row">
                     <div className="col">
                        
                        </div>
                     <div className="col itemCircle">
                         d
                     </div>
                         <div className="col-8">
                     <button className=" dropdown-item dropItem " type="button">Action2</button>
                     </div>
                     
                     </div> 
                     {/* <button className="dropdown-item dropItem" type="button">Another action</button>
                     <button className="dropdown-item dropItem" type="button">Something else here</button> */}
                   </div>
                 </div>
    </div>
    <div className="col-3">
  
    </div> <div className="col-3">
     
    </div>
    <div className="col-3 gantt">
    Gantt
    </div>
  </div>
</div>
        </>
         
    );
}