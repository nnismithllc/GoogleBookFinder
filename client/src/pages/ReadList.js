// React Import for ReadList Component
import React, { Component } from 'react'
import SavedPage from "../components/SavedBook"
import Card from "../components/Card"


// Export and Display for ReadList Component
export default class ReadList extends Component {

  
// Render Function
  render() {
    return (
      <div className="container">
        < Card heading="Saved Books List" />
        <SavedPage />
      </div>
    )
  }
}