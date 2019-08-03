import React, { Component } from "react";
import SpeakerModal from "./speakerModal";
// static array
import speakers from "./speakersList";

class SpeakersSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerModalVisible: false,
      selectedSpeaker: null
    };
  }

  showModal = speaker => {
    this.setState({
      speakerModalVisible: true,
      selectedSpeaker: speaker
    });
  };
  handleCancel = e => {
    this.setState({
      speakerModalVisible: false,
      selectedSpeaker: null
    });
  };

  renderSpeakerList = () => {
    return speakers.map(speaker => {
      const speakerStyle = { backgroundImage: "url(" + speaker.image + ")" };
      return (
        <div
          className="col-lg-3"
          onClick={() => this.showModal(speaker)}
          key={speaker.id}
        >
          <div className="speaker-details" style={speakerStyle}>
            <div className="content">
              <h3>{speaker.name}</h3>
              <h5>{speaker.job}</h5>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <section>
        <p className="speakers-header col-lg-12">RISEUP18'S SPEAKERS</p>
        <div className="row">
          <div className="row col-lg-12">{this.renderSpeakerList()}</div>
        </div>
        <SpeakerModal
          speakerModalVisible={this.state.speakerModalVisible}
          selectedSpeaker={this.state.selectedSpeaker}
          showModal={this.showModal}
          handleCancel={this.handleCancel}
        />
      </section>
    );
  }
}

export default SpeakersSection;
