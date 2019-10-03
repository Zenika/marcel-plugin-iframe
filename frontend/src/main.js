class MarcelPluginIframe extends Marcel.Plugin {
  constructor() {
    super()
    this.iframe = document.querySelector('iframe')
  }

  render() {
    const { src } = this.props

    this.iframe.src = src
  }
}

Marcel.init(MarcelPluginIframe)
