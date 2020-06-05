/**

 @Name：数据可视化
 @Author：王达浩
 @Site：http://www.layui.com/admin/
 @License：LPPL
    
 */


layui.define(function (exports) {

  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */

  layui.use(['admin', 'echarts'], () => {
    let $ = layui.$,
      admin = layui.admin,
      echartsTheme = layui.echartsTheme,
      echarts = layui.echarts;
    //实例数据
    let options_today_trend = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['发表总量', '注册总量', '评论总量', '访问总量']
        },

        xAxis: [{
          type: 'category',
          boundaryGap: true,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
            name: '发表总量',
            type: 'bar',
            areaStyle: {},
            data: [14, 45, 61, 73, 88, 120, 256]
          },
          {
            name: '注册总量',
            type: 'bar',
            areaStyle: {},
            data: [36, 73, 82, 92, 190, 314, 521]
          },
          {
            name: '评论总量',
            type: 'bar',
            areaStyle: {},
            data: [28, 90, 108, 241, 390, 431, 641]
          }, {
            name: '访问总量',
            type: 'bar',
            areaStyle: {},
            data: [120, 149, 242, 459, 513, 604, 789]
          }
        ]
      },
      options_visitors_browser = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          roseType: 'radius',
          itemStyle: { //阴影
            emphasis: {
              //hover时
              shadowBlur: 220,
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            },
          },
          data: [{
              value: 20,
              name: 'Chrome'
            },
            {
              value: 16,
              name: 'Firefox'
            },
            {
              value: 22,
              name: 'IE 8.0'
            },
            {
              value: 25,
              name: 'Safari'
            },
            {
              value: 17,
              name: '其它浏览器'
            }
          ]
        }]
      },
      options_new_registered = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['访问总量', '发表总量', '评论总量', '注册总量']
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
            name: '访问总量',
            type: 'line',
            areaStyle: {},
            data: [652, 666, 679, 690, 709, 712, 724, 734, 745, 756, 765, 789]
          }, {
            name: '评论总量',
            type: 'line',
            areaStyle: {},
            data: [498, 501, 512, 523, 546, 567, 578, 589, 601, 612, 643, 641]
          },
          {
            name: '注册总量',
            type: 'line',
            areaStyle: {},
            data: [410, 421, 431, 449, 453, 469, 478, 487, 499, 504, 512, 521]
          }, {
            name: '发表总量',
            type: 'line',
            areaStyle: {},
            data: [165, 173, 192, 198, 202, 209, 210, 222, 233, 240, 250, 256]
          }
        ]
      },
      options_class_trend = {
        visualMap: {
          top: 'middle',
          right: 10,
          color: ['red', 'yellow'],
          calculable: false
        },
        radar: {
          indicator: [{
              text: '宣传',
              max: 400
            },
            {
              text: '失物寻物',
              max: 400
            },
            {
              text: '学术知识',
              max: 400
            },
            {
              text: '记录分享',
              max: 400
            },
            {
              text: '其他',
              max: 400
            }
          ]
        },
        series: (function () {
          var series = [];
          for (var i = 1; i <= 28; i++) {
            series.push({
              name: '浏览器（数据纯属虚构）',
              type: 'radar',
              symbol: 'none',
              lineStyle: {
                width: 1
              },
              emphasis: {
                areaStyle: {
                  color: 'rgba(0,0,250,0.3)'
                }
              },
              data: [{
                value: [
                  (40 - i) * 10,
                  (38 - i) * 4 + 60,
                  i * 5 + 10,
                  i * 9,
                  i * i / 2
                ],
                name: i + 2000 + ''
              }]
            });
          }
          return series;
        })()
      }
    let echarts_today_trend = echarts.init($('#WDH-today-trend')[0], echartsTheme),
      echarts_visitors_browser = echarts.init($('#WDH-visitors-browser')[0], echartsTheme),
      echarts_new_registered = echarts.init($('#WDH-new-registered')[0], echartsTheme)
    echarts_class_trend = echarts.init($('#WDH-class-trend')[0], echartsTheme)
    echarts_today_trend.setOption(options_today_trend)
    echarts_visitors_browser.setOption(options_visitors_browser)
    echarts_new_registered.setOption(options_new_registered)
    echarts_class_trend.setOption(options_class_trend)
    //防抖+响应布局处理
    let __SCROLLTIMER__ = null
    admin.resize(function () {
      clearTimeout(__SCROLLTIMER__);
      __SCROLLTIMER__ = setTimeout(() => {
        $('[_echarts_instance_]').each((i, e) => {
          echarts.getInstanceByDom(e).resize()
        })
      }, 150);
    });
  });
  exports('visualization', {})
});