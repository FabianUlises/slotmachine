class Slot extends React.Component {
    render() {
        const randomNum1 = Math.floor(Math.random() * this.props.slotImg.length);
        return (
            <div>
                <div classname="slot__img">
                    <img src={this.props.slotImg[randomNum1]} />
                    <img src={this.props.slotImg[randomNum1]} />
                    <img src={this.props.slotImg[randomNum1]} />
                </div>
                <div classname="slot__text">
                    You lose!
                </div>
            </div>
        )
    }
};