import Mock from 'mockjs'
//延时200-600毫秒请求到数据
Mock.setup({
    timeout: '200-600'
})

const Random = Mock.Random;
// 用户总览
function countUserNum() {
    const a = Mock.mock({
        success: true,
        data: [
            {
                "key":"外部扩展设备故障",
                "value":100,
            },
            {
                "key":"单板未配置",
                "value":90,
            },
            {
                "key":"RRU链路断",
                "value":88,
            },
            {
                "key":"光口链路故障",
                "value":70,
            },
            {
                "key":"输入电源断",
                "value":60,
            },
            {
                "key":"其他",
                "value":133,
            }
        ],
    })
    
    return a
}

// 接口，第一个参数url，第二个参数请求类型，第三个参数响应回调
Mock.mock(new RegExp('countUserNum'), 'get', countUserNum)

// /设备总览 

function countDeviceNum() {
    const a = Mock.mock({
        success: true,
        data: {
            alarmNum: '@integer(100, 1000)',
            offlineNum: '@integer(0, 50)',
            totalNum:698
        }
    })
    a.data.onlineNum=a.data.totalNum-a.data.offlineNum


    return a
}

Mock.mock(new RegExp('countDeviceNum'), 'get', countDeviceNum)

function companyavg() {
    const a = Mock.mock({
        success: true,
        data: {
            list: [
                {
                    company: "四局",
                    num: 100,
                    avg: "1小时30分钟12秒",
                },
                {
                    company: "五局",
                    num: 300,
                    avg: "20分钟12秒",
                },
                {
                    company: "六局",
                    num: 44,
                    avg: "3分钟12秒",
                },
                {
                    company: "七局",
                    num: 66,
                    avg: "12秒",
                },
                {
                    company: "八局",
                    num: 22,
                    avg: "2秒",
                },
                {
                    company: "九局",
                    num: 99,
                    avg: "2秒",
                },
            ]
        }
    })
    return a

}

Mock.mock(new RegExp('companyavg'), 'get', companyavg)

function captainavg() {
    const a = Mock.mock({
        success: true,
        data: {
            list: [
                {
                    captain: "张三",
                    num: 100,
                    avg: "1小时30分钟12秒",
                },
                {
                    captain: "李四",
                    num: 300,
                    avg: "20分钟12秒",
                },
                {
                    captain: "王五",
                    num: 44,
                    avg: "3分钟12秒",
                },
                {
                    captain: "李六",
                    num: 66,
                    avg: "12秒",
                },
                {
                    captain: "赵七",
                    num: 22,
                    avg: "2秒",
                },
            ]
        }
    })
    return a

}

Mock.mock(new RegExp('captainavg'), 'get', captainavg)






function sbtx() {
    const a = Mock.mock({
        success: true,
        data: {
            list: [
                {
                    captain: "张三",
                    name: '外部扩展设备故障',
                    reason: "电源类型：交流。Location：rack=54,shelf=1,board=1。",
                },
                {
                    captain: "王五",
                    name: '外部扩展设备故障',
                    reason: "AISG设备ID：4，机架号：8，设备类型：RETC。Location：rack=56,shelf=1,board=1。",
                },
                {
                    captain: "李四",
                    name: '输入电源断',
                    reason: "单板上电。Location：rack=1,shelf=1,board=8。",
                },
                {
                    captain: "李六",
                    name: '光模块接收光功率异常',
                    reason: "配置变更。Location：rack=53,shelf=1,board=1。",
                },
                {
                    captain: "赵七",
                    name: '硬件类型和配置不一致',
                    reason: "单板上电。Location：rack=1,shelf=1,board=7。",
                },
                {
                    captain: "钱八",
                    name: '单板处于初始化状态',
                    reason: "配置变更。Location：rack=53,shelf=1,board=1。",
                },
            ]
        }
    })
    return a
}

Mock.mock(new RegExp('sbtx'), 'get', sbtx)



//中间地图

function centermap(options) {
    let params = parameteUrl(options.url)
    if (params.regionCode && params.regionCode != 'china') {
        const a = Mock.mock({
            success: true,
            data: {
                "dataList|30": [
                    {
                        name: "@city()",
                        value: '@integer(1, 1000)'
                    }
                ],
                regionCode: params.regionCode,//-代表中国
            }
        })
        return a
    } else {
        const a = Mock.mock({
            success: true,
            data: {
                "dataList|8": [
                    {
                        name: "@province()",
                        value: '@integer(1, 1000)'
                    }
                ],
                regionCode: 'china',
            }
        })
        return a
    }

}

Mock.mock(new RegExp('centermap'), 'get', centermap)

// 报警次数

function alarmNum() {
    const a = Mock.mock({
        success: true,
        data: {
            dateList:['2021-11', '2021-12', '2022-01', '2022-02', '2022-03',"2022-04"],
            "numList|6":[
                '@integer(0, 1000)'
            ],
            "numList2|6":[
                '@integer(0, 1000)'
            ]
        }
    })
    return a
}
Mock.mock(new RegExp('alarmNum'), 'get', alarmNum)

// 实时预警

function ssyj() {
    const a = Mock.mock({
        success: true,
        data: {
            "list|40":[{
                alertdetail: "@csentence(5,10)",
                "alertname|1": ["水浸告警","各种报警"],
                alertvalue: "@float(60, 200)",
                createtime: "2022-04-19 08:38:33",
                deviceid: null,
                "gatewayno|+1": 10000,
                phase: "A1",
                sbInfo: "@csentence(10,18)",
                "terminalno|+1": 100,
                provinceName: "@province()",
                cityName: '@city()',
                countyName: "@county()",
            }],
            
        }
    })
    return a
}
Mock.mock(new RegExp('ssyj'), 'get', ssyj)
//安装计划 
function installationPlan() {
    let num=  RandomNumBoth(26,32);
    const a = Mock.mock({
        ["category|"+num]:["@city()"],
        ["barData|"+num]:["@integer(10, 100)"],
    })
    let lineData=[],rateData=[];
    for (let index = 0; index < num; index++) {
        let lineNum = Mock.mock('@integer(0, 100)')+a.barData[index]
        lineData.push(lineNum)
        let rate = a.barData[index] / lineNum;
        rateData.push((rate*100).toFixed(0))
    }
    a.lineData=lineData
    a.rateData=rateData
    return {
        success: true,
        data:a
    }
}
Mock.mock(new RegExp('installationPlan'), 'get', installationPlan)




//报警排名 
function ranking() {
   //多生成几个避免重复 重复会报错
  let num =Mock.mock({"list|48":[{ value:"@integer(50,1000)",name:"@city()"}]}).list
//   console.log(num);
  let newNum =[],numObj={}
  num.map(item=>{
    if(!numObj[item.name] && newNum.length<8){
        numObj[item.name] =true
        newNum.push(item)
    }
  })
  let arr = newNum.sort((a,b)=>{
    return b.value-a.value
  })
  let a ={
      success:true,
      data:arr
  }
  return a
}
Mock.mock(new RegExp('ranking'), 'get', ranking)
/**
 * @description: min ≤ r ≤ max  随机数
 * @param {*} Min
 * @param {*} Max
 * @return {*}
 */
function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
/**
 * @description: 获取路径参数
 * @param {*} url
 * @return {*}
 */
function parameteUrl(url) {
    var json = {}
    if (/\?/.test(url)) {
        var urlString = url.substring(url.indexOf("?") + 1);
        var urlArray = urlString.split("&");
        for (var i = 0; i < urlArray.length; i++) {
            var urlItem = urlArray[i];
            var item = urlItem.split("=");
            console.log(item);
            json[item[0]] = item[1];
        }
        return json;
    }
    return {};
}
