

function clickMe()
{
    
    let ele=document.createElement("h1");
    let text=document.createTextNode("my name is somesh sharma");

    ele.append(text)

    console.log(ele)

    let target=document.getElementById("para");
//    document.body.append(ele)
target.append(ele)

}