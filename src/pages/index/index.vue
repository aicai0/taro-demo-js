<template>
  <view class="index">
    <text class="clicks" @tap="clicks1">{{ msg }}</text>
    <view class="info-box">
      <view v-for="t in infoData" :key="t.name" class="info-row">
        <view>{{t.name}} : </view>
        <view class="value" v-if="t.type ==='text'">{{t.value}}</view>
        <view class="value" v-if="t.type ==='img'">
          <image :src="url" class='avatar' />
        </view>
      </view>
    </view>
    <view class="clicks" @tap="clicks">
      点击
    </view>
  </view>
</template>

<script>
import './index.scss'
import url from "../../assets/imgs/myphoto.png"
import Taro from '@tarojs/taro'
export default {
  name:"index",
  data () {
    return {
      msg: 'Welcome To Visit My Index Page!',
      obj:{},
      url,
      a:null,
      infoData:[
        {
          name: "姓名",
          value: "王凯",
          type: "text"
        },
        {
          name: "年龄",
          value: "29",
          type: "text"
        },
        {
          name: "出生日期",
          value: "1992.12.18",
          type: "text"
        },
        {
          name: "生肖",
          value: "猴",
          type: "text"
        },
        {
          name: "职业",
          value: "互联网研发",
          type: "text"
        },
        {
          name: "任职公司",
          value: "小药药有限公司",
          type: "text"
        },
        {
          name: "工作经历",
          value: [],
          type: "arr"
        },
        {
          name: "个人简历",
          value: "",
          type: "text"
        },
        {
          name: "照片",
          value: "",
          type: "img"
        },
      ]
    }
  },
  created(){
  },
  methods:{
    clicks(){
      try{
        console.log("click")
        let a = this.obj.a.a
        Taro.onError((result) => {
          console.log('执行了click', result)
        })
      }catch(err){
        console.log("index.vue, clicks error",err)
      }
    },
    clicks1(){
      try{
        console.log("clicks1")

        Taro.onError((result) => {
          console.log('执行了clicks1', result)
        })
        let q = this.obj.a.a;
        let l = this.a.length
      }catch(err){
        console.log("index.vue, clicks1 error",err)
      }
    },
    errorCaptured(err, vm, info){
      console.log("vue err", err)
      // -> 错误返回
      console.log(vm)
      // -> vue实例
      console.log(info)
      // -> 在哪个钩子发生错误
      return false
    }
  }
}
</script>
