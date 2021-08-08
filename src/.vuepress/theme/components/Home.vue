<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <div
      class="banner"
      v-bind:style="{ 'background-image': `url(${data.bannerImage})` }"
    >
      <div class="logo">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        />
      </div>
    </div>
    <div class="home__main">
      <header class="hero">
        <h1 v-if="data.heroText !== null" id="main-title">
          {{ data.heroText || $title || "Hello" }}
        </h1>

        <div v-if="data.heroSubTitle !== null" class="call-to-action">
          <p>{{ data.heroSubTitle }}</p>
        </div>

        <div v-if="data.features && data.features.length" class="features">
          <div
            v-for="(feature, index) in data.features"
            :key="index"
            class="feature"
          >
            <h2 class="title">
              <NavLink :item="{ link: feature.url, text: feature.title }" />
            </h2>

            <p>{{ feature.details }}</p>

            <div v-if="feature.link" class="bottom">
              <NavLink
                :item="{ link: feature.link.url, text: feature.link.title }"
              />
            </div>
          </div>
        </div>

        <div v-if="data.callToAction !== null" class="call-to-action">
          <a target="_blank" :href="data.callToAction[0].url">{{
            data.callToAction[0].title
          }}</a>
        </div>

        <p v-if="data.tagline !== null" class="description">
          {{ data.tagline || $description || "Welcome to your VuePress site" }}
        </p>

        <p v-if="data.actionText && data.actionLink" class="action">
          <NavLink class="action-button" :item="actionLink" />
        </p>
      </header>

      <Content class="theme-default-content custom custom--home" />

      <div v-if="data.footer" class="footer">
        {{ data.footer }}
      </div>
    </div>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "Home",

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus">
.theme-default-content .custom--home {
  min-height: auto;
  height: auto;
}

.home {
  .banner {
    background-color: $blue;
    padding: 2rem 1.6rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    .logo {
      display: block;
      max-width: 100px;

      img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  .home__main {
    padding: $navbarHeight 2rem 0;
    max-width: $homePageWidth;
    margin: 0px auto;
    display: block;

    .hero {
      text-align: center;

      img {
        max-width: 100%;
        max-height: 280px;
        display: block;
        margin: 3rem auto 1.5rem;
      }

      h1 {
        font-size: 3rem;
      }

      h1, .description, .action {
        margin: 1.8rem auto;
      }

      .description {
        max-width: 35rem;
        font-size: 1.6rem;
        line-height: 1.3;
        color: lighten($textColor, 40%);
        text-align: left;
      }

      .call-to-action {
        border-top: 1px solid $borderColor;
        border-bottom: 1px solid $borderColor;
        padding: 1.2rem 0;
        margin: 4rem auto;
        display: block;
        font-size: 1.6rem;
        line-height: 1.3;
        color: lighten($textColor, 40%);

        a {
          color: lighten($textColor, 40%);
        }
      }

      .action-button {
        display: inline-block;
        font-size: 1.2rem;
        color: #fff;
        background-color: $accentColor;
        padding: 0.8rem 1.6rem;
        border-radius: 4px;
        transition: background-color 0.1s ease;
        box-sizing: border-box;
        border-bottom: 1px solid darken($accentColor, 10%);

        &:hover {
          background-color: lighten($accentColor, 10%);
        }
      }
    }

    .features {
      margin-top: 2.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      align-content: stretch;
      justify-content: space-between;
      text-align: left;
    }

    .feature {
      flex-grow: 1;
      padding: 1.25rem;
      border: 1px solid transparent;

      .title {
        margin-bottom: 1rem;
        a {
          color: $textColor;
        }
      }

      &:hover {
        border: 1px solid $accentColor;
      }

      &:not(:last-of-type) {
        margin-bottom: 2rem;
      }

      .bottom {
        margin-top: 1rem;
      }

      @media (min-width: $MQNarrow) {
        flex-grow: 1;
        max-width: 30%;

        &:not(:last-of-type) {
          margin-bottom: 0;
        }
      }

      a {
        display: inline-block;
        border-bottom: 2px solid transparent;

        &:hover {
          border-bottom: 2px solid $accentColor;
        }
      }

      h2 {
        font-size: 1.4rem;
        font-weight: 500;
        border-bottom: none;
        padding-bottom: 0;
        color: lighten($textColor, 10%);
      }

      p {
        color: lighten($textColor, 25%);
      }
    }

    .footer {
      padding: 2.5rem;
      border-top: 1px solid $borderColor;
      text-align: center;
      color: lighten($textColor, 25%);
    }
  }

  @media (max-width: $MQMobile) {
    .home {
      .features {
        flex-direction: column;
      }

      .feature {
        max-width: 100%;
        padding: 0 2.5rem;
      }
    }
  }

  @media (max-width: $MQMobileNarrow) {
    .home {
      padding-left: 1.5rem;
      padding-right: 1.5rem;

      .hero {
        img {
          max-height: 210px;
          margin: 2rem auto 1.2rem;
        }

        h1 {
          font-size: 2rem;
        }

        h1, .description, .action {
          margin: 1.2rem auto;
        }

        .description {
          font-size: 1.2rem;
        }

        .action-button {
          font-size: 1rem;
          padding: 0.6rem 1.2rem;
        }
      }

      .feature {
        h2 {
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
