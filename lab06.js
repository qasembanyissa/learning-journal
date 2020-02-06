function club (){
    var  order = prompt ("what do you favout club ? (madrid  or brc)");
    while (order !== 'madrid' && order !== 'brc') {
        order = prompt ("what do you favout club ? (madrid  or brc)");
    }
    var noOfOrders = prompt ("how many picturer for club do you want ?") ;
    
    var item = "";
    
    for(var i=0 ; i< noOfOrders; i++)
    if (order==="madrid")
     {
         item =item+ '<img src="realmadrid.jpg">' ;
     }
     else if (order=== "brc")
     {
        item =item+ '<img src="brc.jpeg">' ; 
     } else {
        item = '<strong> Sorry we dont sereve that here </strong>' ; 
    
     }
     return item ;
    }
    document.write('<h3>'+club()+'</h3>');
    
