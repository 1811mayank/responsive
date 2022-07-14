console.log("get started")
function check(){
    var a;
    const data1 = document.getElementById('form1');
    var temp1 = {
        email : data1[0].value, 
        password : data1[1].value,
        country : data1[2].value,
        Name23 : data1[3].value,
        phone_number : data1[4].value
    };
    
    
    url = "https://api.preprod.inito.com/api/v1/auth";
    data = JSON.stringify(temp1);
    console.log(data);
    paramas = {
        method : "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : data
    }

    fetch(url, paramas).then((response) => {
        a = response.status;
        console.log(a);
        if(a == 201){
            window.open("https://www.inito.com");
        }
        else{
            document.getElementById('abc').innerHTML = `${a}  error occured`;
        }
        return response.json();
        
        
    }
        
    )
    .then(data => console.log(data))
    
    
}







