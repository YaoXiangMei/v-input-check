(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["en"],{"4c0f":function(e,a,n){"use strict";n.r(a);var l=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"请输入："}},[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-input",{directives:[{name:"input-check",rawName:"v-input-check:en",value:{change:e.change},expression:"{ change }",arg:"en"}],attrs:{placeholder:"能输入大小写"},model:{value:e.en.value,callback:function(a){e.$set(e.en,"value",a)},expression:"en.value"}})],1),n("el-col",{attrs:{span:8}},[e.en.value?n("i",{staticClass:"dg-m-l-16 dg-f-s-18",class:[e.en.flag?"el-icon-success dg-t-c-67c23a":"el-icon-error dg-t-c-f56c6c"]}):e._e()])],1)],1),n("el-form-item",{attrs:{label:"小写："}},[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-input",{directives:[{name:"input-check",rawName:"v-input-check:en.lowercase",value:{change:e.changeLowercase},expression:"{ change: changeLowercase }",arg:"en",modifiers:{lowercase:!0}}],attrs:{placeholder:"只能输入小写"},model:{value:e.enLowercase.value,callback:function(a){e.$set(e.enLowercase,"value",a)},expression:"enLowercase.value"}})],1),n("el-col",{attrs:{span:8}},[e.enLowercase.value?n("i",{staticClass:"dg-m-l-16 dg-f-s-18",class:[e.enLowercase.flag?"el-icon-success dg-t-c-67c23a":"el-icon-error dg-t-c-f56c6c"]}):e._e()])],1)],1),n("el-form-item",{attrs:{label:"大写："}},[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-input",{directives:[{name:"input-check",rawName:"v-input-check:en.upperCase",value:{change:e.changeUpperCase},expression:"{ change: changeUpperCase }",arg:"en",modifiers:{upperCase:!0}}],attrs:{placeholder:"只能输入大写"},model:{value:e.enUpperCase.value,callback:function(a){e.$set(e.enUpperCase,"value",a)},expression:"enUpperCase.value"}})],1),n("el-col",{attrs:{span:8}},[e.enUpperCase.value?n("i",{staticClass:"dg-m-l-16 dg-f-s-18",class:[e.enUpperCase.flag?"el-icon-success dg-t-c-67c23a":"el-icon-error dg-t-c-f56c6c"]}):e._e()])],1)],1)],1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),n("code",{staticClass:"html"},[e._v("\n      "+e._s(e.en.template)+"\n      "+e._s(e.enLowercase.template)+"\n      "+e._s(e.enUpperCase.template)+"\n    ")]),e._v("\n    "),n("code",{staticClass:"js"},[e._v("\n      export default {\n        data () {\n          return {\n            en: {\n              value: '',\n              flag: false //是否校验通过\n            }\n          }\n        },\n        methods: {\n          change (value, { flag }) {\n            Object.assign(this.en, {\n              value,\n              flag\n            })\n          }\n        }\n      }\n    ")]),e._v("\n  ")])],1)},t=[],s={data(){return{en:{value:"",flag:!1,template:'\n        <template>\n          <input\n          type="text" :value="en.value"\n          v-input-check:en="{ change } " placeholder="能输入大小写" />\n        </template>\n        '},enLowercase:{value:"",flag:!1,template:'\n        <template>\n          <input\n          type="text" :value="en.value"\n          v-input-check:en.lowercase="{ change } " placeholder="只能输入小写" />\n        </template>\n        '},enUpperCase:{value:"",flag:!1,template:'\n        <template>\n          <input\n          type="text" :value="en.value"\n          v-input-check:en.upperCase="{ change } " placeholder="只能输入大写" />\n        </template>\n        '}}},methods:{change(e,{flag:a}){Object.assign(this.en,{value:e,flag:a})},changeLowercase(e,{flag:a}){Object.assign(this.enLowercase,{value:e,flag:a})},changeUpperCase(e,{flag:a}){Object.assign(this.enUpperCase,{value:e,flag:a})}}},c=s,r=n("e90a"),p=Object(r["a"])(c,l,t,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=en.d95fb465.js.map