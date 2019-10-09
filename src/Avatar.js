import React from 'react';

function Avatar({image,firstname,lastname,star}){  
   let imFalse="https://www.drupal.org/files/issues/default-avatar.png" 
   return ( 
      
   <article className="Avatar">
      <div className = {star && "star-deOuf"}>
         <img 
            src={image ? image : imFalse} 
            alt={firstname + "" + lastname}
         /> 
      </div>
         <h1>
            {firstname}
         </h1>
            <h2>
               {lastname}
            </h2>
   </article>)
    
}




export default Avatar;

