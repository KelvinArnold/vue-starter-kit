const hello = {
  created() {
    this.hello();
  },
  methods: {
    hello: () => {
      console.log('Console log - Mix Hello');
    }
  }
}

export default hello;