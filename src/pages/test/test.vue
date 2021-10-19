<template>
  <view class="test">
    <text class="clicks" @tap="clicks1">{{ msg }}</text>
    <view class="clicks" @tap="clicks">
      简历设置
    </view>
    <view class="clicks" @tap="clicks">
      预览
    </view>
  </view>
</template>

<script>
import './test.scss'
export default {
  name:"test",
  data () {
    return {
      msg: 'Welcome To Visit My Index Page!',
      obj:{},
      a:null
    }
  },
  created(){
    sss
  },
  methods:{
    clicks(){
      console.log("click")
      let a = this.obj.a.a;
      
    },
    clicks1(){
      console.log("clicks1")
      let l = this.a.length
    }
  }
}
</script>
