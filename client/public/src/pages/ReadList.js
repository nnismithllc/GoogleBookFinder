import React, { Component } from 'react'
import SavedPage from "../components/SavedPage"
import Card from "../components/Card"


export default class ReadList extends Component {

  

  render() {
    return (
      <div className="container">
        < Card heading="Saved Books List" />
        <SavedPage />
      </div>
    )
  }
}