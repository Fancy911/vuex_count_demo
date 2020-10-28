<template>
  <div>
<!--    <h3>当前最新的count值为：{{$store.state.count}}</h3>-->
    <!--    getters的第一种使用方式-->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <!-- 异步加一：延时一秒再加一-->
    <button @click="btnHandler3">+1 Async</button>
    <button @click="btnHandler4">+N Async</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    btnHandler1 () {
      // this.$store.state.count++  //这种做法直接修改store里的数据，不便于后期的维护，不可以使用
      this.$store.commit('add')
    },
    btnHandler2 () {
      // commit的作用就是调用某个mutation函数
      this.$store.commit('addN', 3)
    },
    // 异步的让count+1
    btnHandler3 () {
      // 触发action的第一种方式
      // 这里的dispatch函数，专门用来触发某个mutation
      this.$store.dispatch('addAsync')
    },
    btnHandler4 () {
      this.$store.dispatch('addNAsync', 3)
    }
  }
}
</script>
