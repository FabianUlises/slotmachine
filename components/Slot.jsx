class Slot extends React.Component {
    render() {
        // Getting random number to get array index
        const randomNum1 = Math.floor(Math.random() * this.props.slotImg.length);
        const randomNum2 = Math.floor(Math.random() * this.props.slotImg.length);
        const randomNum3 = Math.floor(Math.random() * this.props.slotImg.length);
        return (
            // Start of slot container
            <div className="slot">
                {/* Start of slot image */}
                <div className="slot__img">
                    {/* Setting image src to random array index. If image is index 0 I'm giving it a class to lower width size */}
                    <img src={this.props.slotImg[randomNum1]} className={randomNum1 === 0 ? 'large-cherry' : null} />
                    <img src={this.props.slotImg[randomNum2]} className={randomNum2 === 0 ? 'large-cherry' : null} />
                    <img src={this.props.slotImg[randomNum3]} className={randomNum3 === 0 ? 'large-cherry' : null}/>
                </div>
                {/* End of slot image */}
                {/* Start of slot text */}
                <div className="slot__text">
                    {
                        randomNum1 === randomNum2 && randomNum1 === randomNum3 ? 
                            (
                                // <div>
                                    <h3>You Win!</h3>
                                // </div>
                            )
                            : (
                                // <div>
                                    <h3>You Lose!</h3>
                                // </div>
                            )
                    }
                </div>
                {/* End of slot text */}
            </div>
            // End of slot container
        )
    }
};