import React from 'react'
import PropTypes from 'prop-types'
import './slider.css'

class SliderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.content = React.createRef();
    }

    render () {
        return (
            <div className={['slider', this.props.className].join(' ')}>

                <button onClick={() => this.props.onButtonClick(this.content.current.scrollWidth, this.content.current.offsetWidth, 1)}
                    className={
                        [
                            'slider__button slider__button_left',
                            this.props.hideLeftButton ? 'slider__button_hidden' : null
                        ].join(' ')}
                >
                    <i className={'fas fa-angle-left'}/>
                </button>
                <div className={'slider__content'}>
                    <div style={{transform: 'translateX(' + this.props.position + 'px)'}}
                         ref={this.content}
                         className={'slider__content-inner'}>
                        {this.props.children}
                    </div>
                </div>

                <button onClick={() => this.props.onButtonClick(this.content.current.scrollWidth, this.content.current.offsetWidth, -1)}
                        className={
                            [
                                'slider__button slider__button_right',
                                this.props.hideRightButton ? 'slider__button_hidden' : null
                            ].join(' ')
                        }
                >
                    <i className={'fas fa-angle-right'}/>
                </button>

            </div>
        )
    }

}

SliderComponent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.object,
    onButtonClick: PropTypes.func,
    position: PropTypes.number.isRequired,
    leftButton: PropTypes.bool,
    rightButton: PropTypes.bool
};

SliderComponent.defaultProps = {
    className: ''
};

export default SliderComponent