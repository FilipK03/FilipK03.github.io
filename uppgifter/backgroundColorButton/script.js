let color = localStorage.getItem('color');

change();

function change() {

document.body.style.backgroundColor = localStorage.getItem('color');

}


function redFunction() {

let color = "red";

localStorage.setItem('color', color);


  colorChanger();



  
  function colorChanger() {

    document.body.style.backgroundColor =  color;

}

}

function greenFunction() {

    let color = "green";
    
    localStorage.setItem('color', color);
    
    
      colorChanger();
    
    
    
      
      function colorChanger() {
    
        document.body.style.backgroundColor =  color;
    
    }
    
    }
    
    function blueFunction() {

        let color = "blue";
        
        localStorage.setItem('color', color);
        
        
          colorChanger();
        
        
        
          
          function colorChanger() {
        
            document.body.style.backgroundColor =  color;
        
        }
        
        }
        
        function blackFunction() {

            let color = "black";
            
            localStorage.setItem('color', color);
            
            
              colorChanger();
            
            
            
              
              function colorChanger() {
            
                document.body.style.backgroundColor =  color;
            
            }
            
            }
            
            function whiteFunction() {

                let color = "white";
                
                localStorage.setItem('color', color);
                
                
                  colorChanger();
                
                
                
                  
                  function colorChanger() {
                
                    document.body.style.backgroundColor =  color;
                
                }
                
                }
                
                