<template>
  <div id="app">
    <div class="main-cnt main-header">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
@import 'highlight.js/styles/color-brewer.css';
*{
  margin:0;
  padding:0;
  list-style:none;
}

#app {
  overflow: hidden;
  padding: 0;
  width: 100%;
}
#app ul li{
	text-align:center;
}
#app ul li a {
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 4px 4px;
  text-decoration: none;
  display: block;
  position: relative;
  -webkit-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
  font-weight: 700;
  border-right: 1px solid #e8e8e8;
}

#app ul li a:hover {
  color: #fff;
  background:#41a259;
}
.markdown h1 {
  color: #0d1a26;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 8px;
  font-size: 30px;
  line-height: 38px;
}
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  font-family: Lato;
  margin: 1.6em 0 0.6em;
  font-weight: 500;
  clear: both;
}
.markdown h3 {
  font-size: 18px;
}
.markdown h4 {
  font-size: 16px;
}
.markdown h5 {
  font-size: 14px;
}
.markdown h6 {
  font-size: 12px;
}
.markdown p,
.markdown pre {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
.markdown ul > li > p,
.markdown ol > li > p {
  margin: 0.2em 0;
}
.markdown ul {
  padding: 0;
  margin: 0;
}
.markdown ul > li {
  list-style-type: circle;
  margin-left: 20px;
}
.markdown ol > li {
  list-style-type: decimal;
  margin-left: 20px;
}
.markdown > table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #ebedf0;
  width: 100%;
  margin: 8px 0 16px;
}
.markdown > table th,
.markdown > table td {
  color: #314659;
  border: 1px solid #ebedf0!important;
  text-align: left;
  padding: 10px 15px;
}
.markdown > table th {
  white-space: nowrap;
  color: #5c6b77;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.02);
}
.markdown strong,
.markdown b {
  font-weight: 500;
}
.markdown .sh-markdown-permalink {
  opacity: 0;
}
.markdown h1:hover .sh-markdown-permalink,
.markdown h2:hover .sh-markdown-permalink,
.markdown h3:hover .sh-markdown-permalink,
.markdown h4:hover .sh-markdown-permalink,
.markdown h5:hover .sh-markdown-permalink,
.markdown h6:hover .sh-markdown-permalink {
  opacity: 1;
  display: inline-block;
}
.markdown > br,
.markdown p > br {
  clear: both;
}
.markdown blockquote {
  font-size: 90%;
  color: #0d1a26;
  border-left: 4px solid #ebedf0;
  padding-left: 0.8em;
  margin: 1em 0;
}
.markdown blockquote p {
  margin: 0;
}
.markdown hr {
  height: 1px;
  border: 0;
  background: #ebedf0;
  clear: both;
}
.markdown code {
  font-family: Microsoft YaHei;
  margin: 0 1px;
  background: #f2f4f5;
  padding: 0.2em 0.5em;
  border-radius: 3px;
  font-size: 0.9em;
  border: 1px solid #eee;
}
</style>
