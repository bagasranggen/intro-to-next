import React, { Component } from "react";
import Link from "next/link";

class IndexPage extends Component {
  static getInitialProps(context) {
    // console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    // promise
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
      </div>
    );
  }
}

export default IndexPage;
