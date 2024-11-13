function postdata(req , res){
    const {data} = req.body ;
    const even = [] ;
    const odd = [] ;
    const alpha = [] ;
    data.forEach((item) => {
        if (!isNaN(item)){
            if ( parseInt(item) % 2 == 0 ){
                even.push(item);
            }
            else{
                odd.push(item);
            }
        }
        else if(/^[a-zA-Z]$/.test(item)){
               alpha.push(item.toUpperCase());
        }
    });


    const response = {
        is_success : "true" ,
        name:"Tanu",
        email:"tanu1232gmail.com",
        odd ,
        even ,
        alpha,
} 
     res.json(response) ;

}


function getData(req , res){
    const {data} = req.body ;
    res.json(`Hello user !! ${data}`)
}


module.exports = {postdata , getData}