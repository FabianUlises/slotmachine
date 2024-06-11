class Slot extends React.Component {
    render() {
        return (
            <div>
                <div classname="slot__img">
                    <img src={this.props.slotImg[0]} />
                    <img src={this.props.slotImg[1]} />
                    <img src={this.props.slotImg[2]} />
                </div>
                <div classname="slot__text">
                    You lose!
                </div>
            </div>
        )
    }
};