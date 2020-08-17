import Net from './src/utils/net.util'

declare module 'vue/types/vue' {
  interface Vue {
    $http: typeof Net
  }
}
