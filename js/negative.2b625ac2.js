(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["negative"],{"38ae":function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"小数点的长度："}},[a("el-input-number",{attrs:{min:1},model:{value:e.negative.DpLen,callback:function(n){e.$set(e.negative,"DpLen",n)},expression:"negative.DpLen"}})],1),a("el-form-item",{attrs:{label:"请输入："}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-input",{directives:[{name:"input-check",rawName:"v-input-check:negative",value:{change:e.change,DpLen:e.negative.DpLen},expression:"{ change, DpLen: negative.DpLen }",arg:"negative"}],model:{value:e.negative.value,callback:function(n){e.$set(e.negative,"value",n)},expression:"negative.value"}})],1),a("el-col",{attrs:{span:8}},[e.negative.value?a("i",{staticClass:"dg-m-l-16 dg-f-s-18",class:[e.negative.flag?"el-icon-success dg-t-c-67c23a":"el-icon-error dg-t-c-f56c6c"]}):e._e()])],1)],1)],1),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v("\n      "+e._s(e.negative.template)+"\n    ")]),e._v("\n    "),a("code",{staticClass:"js"},[e._v("\n      export default {\n        data () {\n          return {\n            negative: {\n              DpLen: 2,\n              value: '',\n              flag: false //是否校验通过\n            }\n          }\n        },\n        methods: {\n          change (value, { flag }) {\n            Object.assign(this.negative, {\n              value,\n              flag\n            })\n          }\n        }\n      }\n    ")]),e._v("\n  ")])],1)},l=[],i={data(){return{negative:{DpLen:2,value:"-1.10",flag:!0,template:'\n        <template>\n          <input\n          type="text" :value="negative.value"\n          v-input-check:negative="{ change, DpLen: negative.DpLen }" />\n        </template>\n        '}}},methods:{change(e,{flag:n}){Object.assign(this.negative,{value:e,flag:n})}}},s=i,v=a("e90a"),c=Object(v["a"])(s,t,l,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=negative.2b625ac2.js.map