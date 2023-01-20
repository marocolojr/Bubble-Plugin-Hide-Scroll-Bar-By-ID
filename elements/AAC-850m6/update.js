function(instance, properties, context) {
    let scroll, id, width, bgcolor, hcolor;
    	
    	id = properties.id;
    	width = properties.width;
    	bgcolor = properties.bgcolor;
    	hcolor = properties.handlecolor;
    
    	scroll = `<style id="scrollbar">
					
					#${id}::-webkit-scrollbar {width: ${width}px;}

					#${id}::-webkit-scrollbar-track {
    										background: ${bgcolor};
    										border-radius: ${properties.trackradius}px;
										}
 
					#${id}::-webkit-scrollbar-thumb {
    										background: ${hcolor};
    										border-radius: ${properties.handleradius}px;
										}

					#${id}::-webkit-scrollbar-thumb:hover {background: ${properties.handlehoverbg};}
					
					</style>`;
   	
  	  $('head').append(scroll);
      

}



}