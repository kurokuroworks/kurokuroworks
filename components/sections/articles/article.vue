<template>
  <section class="article-section">
    <div class="cover">
      <img :src="meta.thumbnail">
    </div>
    <div class="container">
      <div class="paper">
        <div class="meta">
          <h1 class="meta-title">{{meta.title}}</h1>
          <p class="meta-description">{{meta.description}}</p>
          <p class="meta-description">{{meta.meta}}</p>
        </div>
        <div class="content" v-html="content"></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['content','meta']
  }
</script>

<style lang="scss">
  .article-section {
    padding-top: 0;
    .cover {
      position: relative;
      z-index: 0;
      left: 0;
      right: 0;
      margin-bottom: -80px;
      @media screen and (min-width: 735px) { // 720 + 15
        margin-bottom: -100px;
      }
      @media screen and (min-width: 1095px) { // 1080 + 15
        margin-bottom: -300px;
      }
      img {
        width: 100%;
      }
    }
    .paper {
      position: relative;
      margin: 20px;
      z-index: 1;
      background-color: #ffffff;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    }
    .meta {
      text-align: center;
      padding: 100px 0 30px;
      .meta-title {
        font-size: 30px;
        color: #444444;
      }
      .meta-description {
        font-size: 22px;
        padding: 10px;
      }
      @media screen and (min-width: 735px) { // 720 + 15
        .meta-title {
          font-size: 40px;
        }
      }
    }
    .content {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      a {
        color: #4183C4;
      }
      h1, h2, h3 {
        margin: 20px 0 10px;
        padding: 0;
        cursor: text;
        position: relative;
      }
      h1 {
        display: none;
      }
      h2 {
        margin-top: 50px;
        font-size: 26px;
        color: #444444;
      }
      h3 {
        font-size: 18px;
      }
      p, blockquote, ul, ol, dl, li, table, pre {
        margin: 15px 0;
        font-size: 18px;
        line-height: 23px;
      }
      hr {
        background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;
        border: 0 none;
        color: #cccccc;
        height: 4px;
        padding: 0;
      }
      ul, ol {
        padding-left: 30px;
      }
      dl {
        padding: 0;
      }
      dl dt {
        font-size: 14px;
        font-weight: bold;
        font-style: italic;
        padding: 0;
        margin: 15px 0 5px;
      }
      dl dd {
        margin: 0 0 15px;
        padding: 0 15px;
      }
      blockquote {
        border-left: 4px solid #dddddd;
        padding: 0 15px;
        color: #777777;
      }
      table {
        padding: 0;
      }
      table tr {
        border-top: 1px solid #cccccc;
        background-color: white;
        margin: 0;
        padding: 0;
      }
      table tr:nth-child(2n) {
        background-color: #f8f8f8;
      }
      table tr th {
        font-weight: bold;
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }
      table tr td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }
      img {
        max-width: 100%;
        margin: 10px 0 20px;
      }
      code, tt {
        margin: 0 2px;
        padding: 0 5px;
        white-space: nowrap;
        border: 1px solid #eaeaea;
        background-color: #f8f8f8;
        border-radius: 3px;
        font-size: 16px;
        font-family: "Courier New", sans-serif;
      }
      pre code {
        margin: 0;
        padding: 0;
        white-space: pre;
        border: none;
        background: transparent;
      }
      pre {
        background-color: #f8f8f8;
        border: 1px solid #cccccc;
        font-size: 13px;
        line-height: 19px;
        overflow: auto;
        padding: 6px 10px;
        border-radius: 3px;
      }
      pre code, pre tt {
        background-color: transparent;
        border: none;
      }
    }
  }
</style>
