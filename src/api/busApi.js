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
        const getTime = await getBusGoTime(busName);
        if(result.data){
            result.data[0].Stops.forEach((element)=>{
                for(let el of getTime){
                    if(el.busStop === element.StopName.Zh_tw){
                        getData = {
                            Stopname:element.StopName.Zh_tw,
                            BusTime:el.busTime,
                            BusStatus:el.status
                        }
                goData.push(getData);
                        return;
                    }
                }
                // console.log('out each');
            })
            // let first = [{route:'123'},{route:'444'},{route:'555'},{route:'666'},{route:'777'}];
            // let second = [{name:'555',time:'23'},{name:'777',time:'21'},{name:'123',time:'64'},{name:'666',time:'23'},{name:'444',time:'12'}];
            // first.forEach((element)=>{
            //     var BreakException = {};

            //     for (let el of second){
            //         console.log(el.name);
            //         if(el.name === '123') {
            //             console.log('same and break');
            //             return;
            //         }
            //     }
            // })
            // getTime.forEach((element)=>{
            //     goData.forEach((mainData)=>{
            //         if(element.busStop === mainData.StopName){
            //             console.log('true');
            //             return false;
            //         }
            //     })
            // })
        }
        return goData;
    }catch(err){
        alert('找不到公車去程站牌')
    }
}
// go route time
async function getBusGoTime(busName){
    try{
        let url=`${baseUrl}/v2/Bus/EstimatedTimeOfArrival/City/Taipei/${busName}?%24filter=RouteName%2FZh_tw%20eq%20'${busName}'%20and%20direction%20eq%200&%24format=JSON`;
        let result = await axios.get(url);
        let data=[]
        let allData=[]
        let turnToMin
        let busTimeStatus
        if(result.data){
            result.data.forEach((element)=>{
                // time = Math.round(element.EstimateTime/60);
                // if(Math.round(element.EstimateTime/60)){

                // }
                turnToMin = Math.round(element.EstimateTime/60)
                if(turnToMin == '1' || turnToMin == '2'){
                    turnToMin = '進站中';
                    busTimeStatus = '1';
                }else if (turnToMin > '2'){
                    turnToMin = turnToMin+'分鐘';
                    busTimeStatus = '0';
                }else{
                    turnToMin = '未發車';
                    busTimeStatus = '0';
                }
                data = {
                    busStop:element.StopName.Zh_tw,
                    busTime:turnToMin,
                    status:busTimeStatus
                }
                allData.push(data);
            })
        }
        return(allData)
    }catch(err){
        alert('找不到去程的公車時間資訊');
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



//bus news
export const getNews = async()=>{
    try{
        let url=`${baseUrl}/v2/Bus/News/City/Taipei?%24top=7&%24format=JSON`;
        let result = await axios.get(url);
        let allData=[]
        let getData=[]
        if(result.data){
            result.data.forEach((element)=>{
                getData={
                    newsTitle:element.Title
                }
                allData.push(getData);
            })
        }
        return allData;
    }catch(err){
        alert('找不到最新消息');
    }
}