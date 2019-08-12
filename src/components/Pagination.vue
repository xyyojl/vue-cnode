<template>
  <div class="pagination">
    <button>首页</button>
    <button>上一页</button>
    <button
      v-for="(btn,index) in pageBtns"
      :key="index"
      :class="[{currentPage:btn == currentPage},pagebtn]"
      @click="changeBtn(btn)"
    >{{btn}}</button>
    <button>下一页</button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data() {
    return {
      pageBtns: [1, 2, 3, 4, 5, "......"],
      currentPage: 1
    };
  },
  methods: {
    changeBtn(page) {
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
    }
  }
};
</script>
<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #888888;
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
.pagebtn {
}
.currentPage {
  color: #fff;
  background: #1f1b1b;
}
</style>