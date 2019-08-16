<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn">上一页</button>
    <button v-if="judge">......</button>
    <button
      v-for="(btn,index) in pageBtns"
      :key="index"
      :class="[{currentPage:btn == currentPage}]"
      @click="changeBtn(btn)"
    >{{btn}}</button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: "Pagination",
  props:['tab'],
  data() {
    return {
      pageBtns: [1, 2, 3, 4, 5, "......"],
      currentPage: 1,
      judge: false
    };
  },
  watch:{
    tab(){
      this.pageBtns = [1, 2, 3, 4, 5, "......"]
      this.changeBtn(1)
    }
  },
  methods: {
    changeBtn(page) {
        // page 代表页码
        if(typeof page !== 'number'){
            switch(page.target.innerText){
                case '上一页':
                    $('button.currentPage').prev().click()
                    break;
                case '下一页':
                    $('button.currentPage').next().click()
                    break;
                case '首页':
                    this.pageBtns = [1, 2, 3, 4, 5, "......"]
                    this.changeBtn(1)
                    break;
                default:
                    break;
            }
            return;
        }

        if(page>4){
            this.judge = true
        }else{
            this.judge = false
        }


      // 让点击的变成当前页
      this.currentPage = page;
      if (page === this.pageBtns[4]) {
        this.pageBtns.shift(); //移除第一个元素
        this.pageBtns.splice(4, 0, this.pageBtns[3] + 1); //添加最后一个
      } else if (page === this.pageBtns[0] && page!==1) {
        //先在第一个位置加一个
        this.pageBtns.unshift(this.pageBtns[0]-1)
        //移除最后一个数字
        this.pageBtns.splice(5,1)
      }
      this.$emit('handleList',this.currentPage);
    }
  }
};
</script>
<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 6px 20px;
}
button {
  background: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  /* height: 30px; */
  cursor: pointer;
  padding: 6px 10px;
  margin: 0 4px;
  font-size: 14px;
}
.currentPage {
  color: #fff;
  background: #1f1b1b;
}
</style>