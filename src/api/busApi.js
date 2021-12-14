import axios from ".";

const baseUrl = `https://ptx.transportdata.tw/MOTC`

export const getAllRoutes = async()=>{
    try{
        let data=[]
        let routeData = {}
        let url = `${baseUrl}/v2/Bus/Route/City/Taipei?$select=RouteName&$format=JSON`
        let result = await axios.get(url);
        if(result.data){
            for(let i=0;i<result.data.length;i++){
                routeData = {
                    routeName:result.data[i].RouteName.Zh_tw
                }
                data.push(routeData)
            }
        }
        return data;
    }catch(err){
        alert('找不到路線')
    }
}

export const getBusGoStop = async(busName)=>{
    try{
        let goData=[]
        let getData = {}
        let url = `${baseUrl}/v2/Bus/DisplayStopOfRoute/City/Taipei/${busName}?%24filter=RouteName%2FZh_tw%20eq%20'${busName}'&%24format=JSON`;
        let result = await axios.get(url);
        if(result.data){
            result.data[0].Stops.forEach((element)=>{
                getData = {
                    StopName:element.StopName.Zh_tw
                }
                goData.push(getData);
            })
        }
        return goData;
    }catch(err){
        alert('找不到公車去程站牌')
    }
}

export const getBusBackStop = async(busName)=>{
    try{
        let backData=[]
        let getData = {}
        let url = `${baseUrl}/v2/Bus/DisplayStopOfRoute/City/Taipei/${busName}?%24filter=RouteName%2FZh_tw%20eq%20'${busName}'&%24format=JSON`;
        let result = await axios.get(url);
        if(result.data){
            result.data[1].Stops.forEach((element)=>{
                getData = {
                    StopName:element.StopName.Zh_tw
                }
                backData.push(getData);
            })
        }
        return backData;
    }catch(err){
        alert('找不到公車回程站牌')
    }
}

// wait to try
export const getBusGoInfo = async(busName)=>{
    try{
        let url=`${baseUrl}/EstimatedTimeOfArrival/City/Taipei/${busName}?$filter=RouteName/Zh_tw eq '${busName}'&$orderby=StopSequence,Direction&$format=JSON`;
        let result = await axios.get(url);
        if(result.data){
            result.data.forEach((element)=>{
                console.log(element.PlateNumb);
                console.log(element.StopID);
                console.log(element.StopName.Zh_tw);
                console.log(element.EstimateTime);
                console.log(element.NextBusTime);
            })
        }
    }catch(err){
        alert('找不到去程的公車時間資訊');
    }
}