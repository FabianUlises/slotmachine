class Slot extends React.Component {
    render() {
        // Getting game outcome text depending on images generated
        const outcome = this.props.img1 === this.props.img2 && this.props.img1 === this.props.img3 ? <h4>You Win!</h4> : <h4>You Lose!</h4>;
        return (
            // Start of slot container
            <div className="slot">
                {/* Start of slot image */}
                <div className="slot__img">
                    {/* Setting image src to random array index. If image is index 0 I'm giving it a class to lower width size */}
                    <img src={this.props.img1} className={this.props.img1 === this.props.imgArr[0] ? 'large-cherry' : null} />
                    <img src={this.props.img2} className={this.props.img2 === this.props.imgArr[0] ? 'large-cherry' : null} />
                    <img src={this.props.img3} className={this.props.img3 === this.props.imgArr[0] ? 'large-cherry' : null} />
                </div>
                {/* End of slot image */}
                {/* Start of slot text */}
                <div className="slot__text">
                    {outcome}
                </div>
                {/* End of slot text */}
            </div>
            // End of slot container
        )
    }
};