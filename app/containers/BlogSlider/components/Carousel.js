import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { DOCUMENT_URL } from 'containers/App/constants';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {this.props.data && this.props.data.map((item, idx) => (
          <Carousel.Item key={`list${idx}`}>
            <img
              className="d-block w-100"
              src={`${DOCUMENT_URL}${item.image && item.image.document_name}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </Carousel.Caption>
          </Carousel.Item>

        ))}
      </Carousel>
    );
  }
}
// render(<ControlledCarousel />);

export default ControlledCarousel