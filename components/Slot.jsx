class Slot extends React.Component {
    render() {
        const randomNum1 = Math.floor(Math.random() * this.props.slotImg.length);
        return (
            <div className="slot">
                <div className="slot__img">
                    <img src={this.props.slotImg[randomNum1]} />
                    <img src={this.props.slotImg[randomNum1]} />
                    <img src={this.props.slotImg[randomNum1]} />
                </div>
                <div className="slot__text">
                    You lose!
                </div>
            </div>
        )
    }
};