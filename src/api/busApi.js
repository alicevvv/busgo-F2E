import axios from ".";

const baseUrl = `https://ptx.transportdata.tw/MOTC`

export const getBusStop = async (city,routeName) => {
    try{
        let data= {}
        let stopData={}
        let go =[]
        let back=[]

        let url = `${baseUrl}/v2/Bus/StopOfRoute/City/{City}/{RouteName}?$format=JSON`;
        const result = await axios.get(url);
        console.log(result);

    }catch (err){
        alert('沒有這個路線');
    }
}

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