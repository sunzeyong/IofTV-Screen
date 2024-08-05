<!--
 * @Author: daidai
 * @Date: 2022-03-04 09:23:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:05:02
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
  <div class="contents">

    <div class="contetn_left">
      <div class="pagetab">
      </div>
    
      <ItemWrap 
        class="contetn_left-center contetn_lr-item" 
        title="新增告警监控信息">
        <LeftBottom />
      </ItemWrap>

      <ItemWrap
      class="contetn_left-bottom contetn_lr-item"
        title="施工单位处理时长">
        <LeftBottom_1 />
      </ItemWrap>


    </div>
        <div class="contetn_left">
      <div class="pagetab">
      </div>

      <ItemWrap
      class="contetn_left-bottom contetn_lr-item"
        title="存量告警类型分布">
        <LeftCenter />
      </ItemWrap>

      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="施工队长处理时长TOP5">
        <LeftBottom_2 />
      </ItemWrap>
    </div>




  </div>
</template>

<script>
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import LeftBottom_1 from "./left-bottom_1.vue";
import LeftBottom_2 from "./left-bottom_2.vue";

export default {
  components: {
    LeftCenter,
    LeftBottom,
    LeftBottom_1,
    LeftBottom_2,
  },
  data() {
    return {
    
    };
  },
  filters: {
    numsFilter(msg) {
      return msg || 0;
    },
  },
  created() {
  },

  mounted() {},
  methods: {
  
  },
};
</script>

<style lang="scss" scoped>
// 内容
.contents {
  .contetn_left,
  .contetn_right {
    width: 900px;
    box-sizing: border-box;
    padding: 16px 0;
  }

  .contetn_lr-item {
    height: 400px;
    padding: 16px 0;
  }

  .contetn_left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
  }
}


@keyframes rotating {
    0% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1);
    }
    50% {
        -webkit-transform: rotate(180deg) scale(1.1);
        transform: rotate(180deg) scale(1.1);
    }
    100% {
        -webkit-transform: rotate(360deg) scale(1);
        transform: rotate(360deg) scale(1);
    }
}
</style>
