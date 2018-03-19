class ConfCallPlugin extends Marcel.Plugin {
  constructor() {
    super()
    this.iframe = document.querySelector('iframe')
  }

  render() {
    this.iframe.src = this.props.src
  }
}

const instance = new ConfCallPlugin()
