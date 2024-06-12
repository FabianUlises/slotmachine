class SlotMachine extends React.Component {
    render() {
        const slotImg = ['../img/cherry-1.png', '../img/cherry-2.png', '../img/cherry-3.png'];
        // Getting random number to get array index
        const randomNum1 = Math.floor(Math.random() * slotImg.length);
        const randomNum2 = Math.floor(Math.random() * slotImg.length);
        const randomNum3 = Math.floor(Math.random() * slotImg.length);
        const outcome = randomNum1 === randomNum2 && randomNum1 === randomNum3 ? 
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
        return (
            <div>
                <Slot
                    img1={slotImg[randomNum1]}
                    img2={slotImg[randomNum2]}
                    img3={slotImg[randomNum3]}
                    outcome={outcome}
                    imgArr={slotImg}
                 />
                <Slot
                    img1={slotImg[randomNum1]}
                    img2={slotImg[randomNum2]}
                    img3={slotImg[randomNum3]}
                    outcome={outcome}
                    imgArr={slotImg}
                 />
                <Slot
                    img1={slotImg[randomNum1]}
                    img2={slotImg[randomNum2]}
                    img3={slotImg[randomNum3]}
                    outcome={outcome}
                    imgArr={slotImg}
                 />
            </div>
        )
    }
};