function changeColor(newColor)
{
    const element=document.getElementById('para');

    element.style.color=newColor;

}
function getCityName()
{
    cityName=document.getElementById('fromCity').value;
    document.getElementById('toCity').innerHTML=cityName;
}