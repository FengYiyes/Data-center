<template>
  <div class="HelloWorld">
    <div class="count" @click="count">
    </div>
    {{sum}}
    <input v-model="question">
    <p>{{answer}}</p>
    <mt-spinner type="snake"></mt-spinner>
    <div :class="classObject"></div>
    <div :style="styleObject">123</div>
    <div v-if="isActive == true">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
    <ul v-for="(item,i) in itemS" :key="i">
      <li ref="itemS" @click="showItem(item)">{{item}}</li>
    </ul>
    <div @click="clicka()" class="clicka">
      <!-- @click.stop 阻止单击事件继续传播（可做阻止事件冒泡） -->
      <div @click.stop="clickb()" class="clickb">

      </div>
    </div>
  </div>
</template>

<script>
import { DatetimePicker, Spinner } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      num: "0",
      question: "",
      answer: "1",
      isActive: true,
      error: null,
      itemS: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  components: {
    "mt-spinner": Spinner
  },
  computed: {
    sum: function() {
      let s = this.num;
      return s;
    },
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal"
      };
    },
    styleObject: function() {
      return {
        color: "red",
        fontSize: "32px"
      };
    }
  },
  watch: {
    question: function() {
      if (this.question == "2") {
        this.answer = "2";
      } else {
        this.answer = "1";
      }
    }
  },
  methods: {
    count: function() {
      this.num++;
      console.log("num: " + this.num);
    },
    showItem: function(i) {
      console.log(i);
    },
    clicka: function() {
      alert("a");
    },
    clickb: function() {
      alert("b");
    }
  },
  created() {
    this.$nextTick(() => {
      //DOM渲染结束之后延迟回调
      this.$refs.itemS[0].style.display = "none";
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.count {
  width: 1rem;
  height: 1rem;
  background-color: red;
}

.clicka {
  width: 2rem;
  height: 2rem;
  background-color: green;
}

.clickb {
  width: 1rem;
  height: 1rem;
  background-color: black;
}
</style>
