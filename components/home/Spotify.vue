<template>
  <article class="playlist block">
    <a :href="data.link" :name="data.name">
      <figure class="image">
        <LazyImage :src="smallImage" :srcset="srcset" :alt="data.name" :title="data.name" />
      </figure>
    </a>
    <div class="info">
      <a :href="data.link" :name="data.name">
        <h4>{{ name }}</h4>
      </a>
      <p v-html="description"></p>
      <span class="more">Last updated: {{ date }}</span>
    </div>
  </article>
</template>
<script>
  import { format, parse } from 'date-fns'
  import LazyImage from '~/components/LazyImage.vue'

  export default {
    props: ['data'],
    components: {
      LazyImage
    },
    computed: {
      date () {
        return format(parse(this.data.last_update), 'Do MMM')
      },
      description () {
        return `<a href="${this.data.link}" name="${this.data.name}">` + this.data.description.replace(/<a href="([^"]*?)">Crack in the Road<\/a>/g, 'Crack in the Road')
                                    .replace(/<a href="([^"]*?)">www.crackintheroad.com<\/a>/g, 'Crack in the Road')
                + '</a>'
      },
      name () {
        return this.data.name.replace('Crack in the Road ', '')
      },
      srcset () {
        console.log(this.data.image);
        return `${this.data.image}.jpg 300w, ${this.smallImage} 150w`
      },
      smallImage () {
        return `${this.data.image}_150.jpg`
      }
    }
  }
</script>
<style lang="scss">
.playlists {
  overflow:hidden;
  .block {
    display: flex;
    flex-direction: column;
    width: calc(50vw - 30px);
    @media(min-width:768px) {
      flex-direction: row;
      width: 100%;
      height: auto;
    }
    @media(min-width:1024px) {
      width: calc(50% - 10px);
      text-align:left;
    }
    a {
      border-bottom: none;
    }
    .image {
      width: calc(50vw - 30px);
      height: calc(50vw - 30px);
      @media(min-width:768px) {
        min-width: 25vw;
        width: auto;
        height: 25vw;
      }
      @media(min-width:1024px) {
        min-width: 20vw;
        height: 20vw;
      }
      @media(min-width:1440px) {
        min-width: 0;
        width:calc((50vw - 120px) / 3);
        height:calc((50vw - 120px) / 3);
      }
      @media(min-width:1800px) {
        width:calc(900px / 3);
        height:calc(900px / 3);
      }
      img {
        height: 100%;
      }
    }
    .info {
      width: 100%;
      height: auto;
      font-size: 14px;
      @media(min-width:768px) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      @media(min-width:1024px) {
        justify-content:center;
        padding: 20px 40px;
        height: 20vw;
      }
      @media(min-width:1440px) {
        height:calc(((50vw - 120px) / 3);
      }
      @media(min-width:1800px) {
        height:calc(900px / 3);
      }
    }
    h4 {
      margin-top: 0;
      @media(min-width:768px) {
        font-weight: bold;
      }
    }
    .subscribe {
      width: 100%;
      background-color: green;
      display:none;
    }
    .more {
      position: relative;
      background-color: transparent;
      display: block;
      bottom: 0;
      padding-bottom: 0;
      color: rgb(51,51,51);
      display:none;
      @media(min-width:768px) {
        display:block;;
      }
      @media(min-width:1024px) {
        text-align: left;
      }
    }
  }
}
</style>
