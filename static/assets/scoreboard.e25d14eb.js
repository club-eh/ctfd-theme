import{m as t,C as a}from"./index.11f1bf07.js";import{g as e,e as i}from"./index.cc9d30b9.js";import"./echarts.128204f2.js";window.Alpine=t;window.CTFd=a;t.data("ScoreboardDetail",()=>({data:null,async init(){this.data=await a.pages.scoreboard.getScoreboardDetail(10);let o=e(a.config.userMode,this.data);i(this.$refs.scoregraph,o)}}));t.start();