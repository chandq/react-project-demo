import React, {Component} from 'react';

class Version extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.debug('uiVersion: ', uiVersion, process.env);
    return <h1>Portal Version: {uiVersion}</h1>;
  }
}
module.exports = Version;
export default Version;