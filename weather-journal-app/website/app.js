//get the date today
let date = new Date();
let TodayDate = date.toDateString();
// Personal API Key for OpenWeatherMap API
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const api = ",&appid=f8a771601a9624cb98f25476e904ee37&units=imperial";
// Event listener to add function to existing HTML DOM element
const server = "http://127.0.0.1:8000";


const generateDataToSend = ()=>{
    //get data from document
    const zip = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
    getMyWeatherDataFromApi(zip).then((data)=>{
        if(data){
            //unpack data from json
            console.log(data);
             const  temp=data.main["temp"];
             const  city=data.name;
            const   description=data.weather["0"]["description"];

            const packet ={
                TodayDate,city,
                temp:Math.round(temp),
                description,
                feelings,
            };//put data in container object to send to server
            console.log(packet);
            postDataToServer(server+"/add",packet);//send data to server
            updateForm();
        }
        });
    
};
document.querySelector("#generate").addEventListener("click",generateDataToSend);
/* Function to GET Web API Data*/
const getMyWeatherDataFromApi = async(zip)=>{
        const response= await fetch(baseURL+zip+api);
        const data = await response.json();
        console.log(data);
        if(data.cod!=200){
            alert("enter Right Data");
            unfill();
            return;
        }
        return data;
    }
   
/* Function to POST data */
const postDataToServer= async(URL="",packet={})=>{
    const received=await fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(packet),
    });
   
        const resData=await received.json();
        console.log("data saved",resData);
        return resData;
  
    };
      const unfill=()=>{
        document.getElementById("date").innerHTML="";
        document.getElementById("city").innerHTML="";
        document.getElementById("temp").innerHTML="";
        document.getElementById("description").innerHTML="";
        document.getElementById("content").innerHTML="";
    }
    const updateForm = async()=>{
        const received = await fetch(server+"/all");
        console.log("formUI",received);
            const saved=await received.json();
            unfill();
            document.getElementById("date").innerHTML="ToDay"+" : "+saved.TodayDate;
            document.getElementById("city").innerHTML="City"+" : "+saved.city;
            document.getElementById("temp").innerHTML="Temprature"+" : "+saved.temp;
            document.getElementById("description").innerHTML="description"+" : "+saved.description;
            document.getElementById("content").innerHTML="Feelings"+" : "+saved.feelings;

       
    }



