class Slot extends React.Component {
    render() {
        const randomNum1 = Math.floor(Math.random() * this.props.slotImg.length);
        const randomNum2 = Math.floor(Math.random() * this.props.slotImg.length);
        const randomNum3 = Math.floor(Math.random() * this.props.slotImg.length);
        return (
            <div className="slot">
                <div className="slot__img">
                    <img src={this.props.slotImg[randomNum1]} className={randomNum1 === 0 ? 'large-cherry' : null} />
                    <img src={this.props.slotImg[randomNum2]} className={randomNum2 === 0 ? 'large-cherry' : null} />
                    <img src={this.props.slotImg[randomNum3]} className={randomNum3 === 0 ? 'large-cherry' : null}/>
                </div>
                <div className="slot__text">
                    {
                        randomNum1 === randomNum2 && randomNum1 === randomNum3 ? 
                            (
                                <div>
                                    <h3>You Win!</h3>
                                </div>
                            )
                            : (
                                <div>
                                    <h3>You Lose!</h3>
                                </div>
                            )
                    }
                </div>
            </div>
        )
    }
};