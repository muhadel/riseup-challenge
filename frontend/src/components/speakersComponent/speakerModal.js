import React, { Component } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
class SpeakerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { speakerModalVisible, handleCancel, selectedSpeaker } = this.props;
    if (!selectedSpeaker) return null;
    return (
      <Modal
        bodyStyle={{ padding: 0 }}
        closable
        footer={null}
        width={900}
        visible={speakerModalVisible}
        onOk={this.handleCancel}
        onCancel={handleCancel}
      >
        <div className="row col-lg-12">
          <div className="col-lg-3">
            <img
              className="speaker-image-modal"
              src={selectedSpeaker.image}
              alt={selectedSpeaker.name}
            />
          </div>
          <div className="col-lg-9">
            <h3 className="speaker-name-modal">{selectedSpeaker.name}</h3>
            <h5 className="speaker-job-modal">{selectedSpeaker.job}</h5>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SpeakerModal;
