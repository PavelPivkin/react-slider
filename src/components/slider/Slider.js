import React from 'react'
import PropTypes from 'prop-types'
import './slider.css'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.content = React.createRef();
    }

    componentDidMount() {
        this.props.onMount(this.content.current.scrollWidth, this.content.current.offsetWidth);
    }

    render () {
        return (
            <div className={['slider', this.props.className].join(' ')}>

                <button onClick={() => this.props.onButtonClick(this.props.shift)}
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

                <button onClick={() => this.props.onButtonClick(-this.props.shift)}
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

Slider.propTypes = {
    className: PropTypes.string,
    children: PropTypes.object,
    onButtonClick: PropTypes.func,
    onMount: PropTypes.func.isRequired,
    position: PropTypes.number.isRequired,
    shift: PropTypes.number.isRequired,
    leftButton: PropTypes.bool,
    rightButton: PropTypes.bool
}

Slider.defaultProps = {
    className: '',
    withIndicator: true,
    withButtons: false
}

export default Slider