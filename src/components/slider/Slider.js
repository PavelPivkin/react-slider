import React from 'react';
import SliderComponent from "./SliderComponent";
import PropTypes from 'prop-types';


class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0,
            isLoading: false,
            error: null,
            hideRightButton: false,
            hideLeftButton: true
        };
        this.shiftPercantage = 1;
    }

    onButtonClick = (scrollWidth, offsetWidth, direction) => {
        let shift = offsetWidth * this.shiftPercantage * direction;
        let nextPosition = this.state.currentPosition + shift;
        if (nextPosition <= 0) {
            if (nextPosition <= offsetWidth - scrollWidth) {
                this.setState({
                    currentPosition: offsetWidth - scrollWidth,
                    hideRightButton: true,
                    hideLeftButton: false
                });
                return;
            } else {
                this.setState ({
                    currentPosition: nextPosition,
                    hideRightButton: false,
                    hideLeftButton: false
                });
            }
        } else {
            this.setState({
                currentPosition: 0,
                hideLeftButton: true
            });
        }
    }





    render() {
        return <SliderComponent
            position={this.state.currentPosition}
            onButtonClick={this.onButtonClick}
            hideRightButton={this.state.hideRightButton}
            hideLeftButton={this.state.hideLeftButton}
        >{this.props.items}</SliderComponent>
    }
}

Slider.propTypes = {
    items: PropTypes.array
};

export default Slider