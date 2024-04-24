let a = document.getElementById('KnowMore');
let currDis = "none";



a.addEventListener('click', () =>{
  if(currDis === "none"){
    document.querySelector('.PersonalInfos').style.display='inherit';
  currDis = "none2";
  document.getElementById('KnowMore').innerText="Close";
}
else{
  currDis = "none";

  document.querySelector('.PersonalInfos').style.display='none';
  document.getElementById('KnowMore').innerText="Know More";
  
}
console.log(currDis);
}
)






// DownLoad CV JS:
const DownloadCV = document.getElementById('DownloadCV');

DownloadCV.addEventListener('click', () =>{
alert("CV will be uploaded shortly!")
})


// FormValidation:



